const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Assignment');

// Schema to create Student model
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

const Student = model('student', studentSchema);

module.exports = Student;
