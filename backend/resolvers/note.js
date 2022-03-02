const Note = {
    author: async(note, args, {models}) => await models.User.findOne({_id: note.author}),
    favoritedBy: async(note, args, {models}) => await models.User.find({_id: {$in: note.favoritedBy}})
};

export default Note;