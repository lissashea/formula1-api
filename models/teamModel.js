const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    previous_names: {
      type:String,
      required: false
    },
    driver1: {
      type: String,
      required: true
    },
    driver2: {
      type: String,
      required: true
    },
    championships: [
      {
        year: {
          type: Number,
          required: true
        },
        driver: {
          type: String,
          required: true
        }
      }
    ],
    homebase: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Team', teamSchema);
