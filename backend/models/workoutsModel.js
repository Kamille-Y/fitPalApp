  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter an exercise type',
      },
      name: {
        type: String,
        trim: true,
        required: 'Exercise name',
      },
      duration: {
        type: Number,
        required: 'Exercise duration in minutes',
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});


const workout = mongoose.model('workout', workoutSchema);

module.exports = workout;