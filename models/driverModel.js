const mongoose = require('mongoose');

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"]
    },
    number: {
      type: Number,
      require: false
    },
    nationality: {
      type: String,
      required: [true, "Please enter nationality"]
    },
    team: {
      type: String,
      required: [true, "Please enter team"]
    },
    year: {
      type: Number,
      required: true,
      default: 2023
    },
    points: [
      {
        year: {
          type: Number,
          required: true
        },
        points: {
          type: Number,
          required: true
        }
      }
    ],
    engine: {
      type: String,
      required: false
    },
    team_principal: {
      type: String,
      required: false
    },
    history: [
      {
        year: {
          type: Number,
          required: true
        },
        team: {
          type: String,
          required: true
        }
      }
    ],
    image: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;