const mongoose = require('mongoose')

const driverSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"]
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
    image: {
      type: String,
      required: false,
    }
  },
  {
    timestamp: true
  }
)

const Driver = mongoose.model('Driver', driverSchema);

module.exports = Driver;