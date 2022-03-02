const User = {
    notes: async(user, args, {models}) => await models.Note.find({_id: user._id}).sort({_id: -1}),
    favorites: async (user, args, { models }) => await models.Note.find({favoritedBy: user._id}).sort({_id: -1})
};

export default User;