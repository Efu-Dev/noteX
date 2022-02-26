import Note from '../models/note.js';

const Query = {
    notes: async () => await Note.find(),
    note: async (parent, args) => await Note.findById(args.id)
};

export default Query;