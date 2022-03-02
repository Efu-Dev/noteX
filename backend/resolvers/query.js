import Note from '../models/note.js';

const Query = {
    notes: async () => await Note.find().limit(20),
    note: async (parent, args) => await Note.findById(args.id),
    user: async(parent, {username}, {models}) => await models.User.findOne({username}),
    users: async(parent, args, {models}) => await models.User.find({}),
    me: async(parent, args, {models, user}) => await models.User.findById(user.id),
    noteFeed: async(parent, {cursor}, {models}) => {
        const limit = 4;
        let hasNextPage = false;
        const cursorQuery = cursor ? {_id: {$lt: cursor}} : {};
        let notes = await models.Note.find(cursorQuery).sort({_id: -1}).limit(limit + 1);

        if(notes.length > limit){
            hasNextPage = true;
            notes = notes.slice(0, limit - 1);
        }

        const newCursor = notes[notes.length - 1]._id;

        return {notes, cursor: newCursor, hasNextPage};
    }
};

export default Query;