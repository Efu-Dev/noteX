import Note from '../models/note.js';

const Mutation = {
    newNote: async (parent, args) => await Note.create({
        title: args.title,
        content: args.content,
        author: "Juan Pérez"
    })
};

export default Mutation;