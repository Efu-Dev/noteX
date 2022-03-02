import mongoose from 'mongoose';
import User from './user.js';

const noteSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    favoriteCount: {type: Number, default: 0},
    favoritedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {timestamps: true});

const Note = mongoose.model('Note', noteSchema);

export default Note;