const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction.js");
const formatDate = require("../utils/format.date.js");

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatDate(timestamp)  
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () { 
  `${this.reactions.length}`})

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
