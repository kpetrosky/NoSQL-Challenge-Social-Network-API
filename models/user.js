// thoughts: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Thought',
//     },
// ]
// this will be the thoughts array


// reactions: [reactionSchema],
//},
//this how to build the reaction array inside the thought model


const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
    //need to figure out how to match a valid email address (look into Mongoose's matching validation)
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'Thought'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
