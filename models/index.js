// import User model
const User = require('./User');
const Post = require("./Post");

// create associations
// a user can have multiple posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// a post can only be from one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// export an object with User model as a property
module.exports = { User, Post };