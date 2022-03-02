import bcrypt from 'bcrypt'; // npm i bcrypt
import jwt from 'jsonwebtoken'; // npm i jsonwebtoken
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { AuthenticationError, ForbiddenError } from 'apollo-server-express';

import gravatar from '../util/gravatar.js';

dotenv.config();

const Mutation = {

    newNote: async (parent, {title, content}, {models, user}) => {

        if(!user)
            throw new AuthenticationError('Error when creating the new note.');
        
        return await models.Note.create({
            title,
            content,
            author: mongoose.Types.ObjectId(user.id)
        }   
    )},

    updateNote: async (parent, {id, content}, {models, user}) => {
        
        if(!user)
            throw new AuthenticationError("The user is not signed in.");
        
        const note = await models.Note.findById(id);
        if(note && String(note.author) !== user.id)
            throw new ForbiddenError("The user does not have permissions to update this note.");

        try{
            const newNote = await models.Note.findOneAndUpdate({_id: id}, {$set: {content, updatedAt: new Date()}}, {new: true});
            return newNote;
        }
        catch(error){
            console.log(error);
        }        
    },

    deleteNote: async (parent, {id}, {models, user}) => {

        if(!user)
            throw new AuthenticationError("The user is not signed in.");
        
        const note = await models.findById(id);
        if(note && String(note.author) !== user.id)
            return new ForbiddenError("The user doesn't have permissions to delete this note.");
        
        try{
            await note.remove();
            return true;
        } catch(err){
            console.log(err);
            return false;
        }
    },

    signUp: async (parent, {username, password, email}, {models}) => {
        email = email.toLowerCase().trim();
        const hashed = await bcrypt.hash(password, 16);
        const avatar = gravatar(email);

        try{
            const newUser = await models.User.create({
                username,
                password: hashed,
                email,
                avatar
            });

            return jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
        } catch(err){
            console.log(err);
            throw new Error('Error creating account');
        }
    },

    signIn: async (parent, {username, password, email}, {models}) => {
        if(email)
            email = email.toLowerCase().trim();
        
        const user = await models.User.findOne({
            $or: [{username}, {email}]
        });

        if(!user)
            throw new AuthenticationError('Invalid Identification');
        
        const validPass = await bcrypt.compare(password, user.password);

        if(!validPass)
            throw new AuthenticationError('Invalid Credentials');
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        console.log(token);
        return token;
    },

    toggleFavorite: async(parent, {id}, {models, user}) => {
        if(!user)
            throw new AuthenticationError("The user is not signed in.")
        
        let note = await models.Note.findOne({_id: id});
        const hasUser = note.favoritedBy.indexOf(user.id) !== -1;
        console.log(note);

        if(hasUser)
            return await models.Note.findOneAndUpdate({_id: note._id}, {
                $pull: {favoritedBy: mongoose.Types.ObjectId(user.id)},
                $inc: {favoriteCount: -1}
            }, {new: true});
        else
            return await models.Note.findOneAndUpdate({_id: note._id}, {
                $push: {favoritedBy: mongoose.Types.ObjectId(user.id)},
                $inc: {favoriteCount: 1}
               
            }, {new: true});       
    }
};

export default Mutation;