// import mongoose
const mongoose = require('mongoose');

// define schema for an Employer
var appointmentSchema = new mongoose.Schema({
    appointmentDate: {
        type: Date,
        required: 'AppointmentDate is required'
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email is required'
    }
})

// make public
module.exports = mongoose.model('Appointment', appointmentSchema);