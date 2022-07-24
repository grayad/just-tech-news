// import User model
const User = require('./User');
const Post = require("./Post");
const Vote = require('./Vote');

// create associations
// a user can have multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// a post can only be from one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});
Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});
Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});
User.hasMany(Vote, {
    foreignKey: 'user_id'
});
Post.hasMany(Vote, {
    foreignKey: 'post_id'
});

// export an object with User model as a property
module.exports = { User, Post, Vote };