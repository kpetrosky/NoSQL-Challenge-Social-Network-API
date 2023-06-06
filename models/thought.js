const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction.js');

// Schema to create thought model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
    },
    createAt: {
        type: Date,
        default: Date.now
        //get a getter method to format timestamp
    },
    userName: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('Thought', thoughtsSchema);

module.exports = Thought;
