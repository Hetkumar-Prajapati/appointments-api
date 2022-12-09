const express = require('express')
const appointment = require('../models/appointment')
const router = express.Router()
const Appointment = require('../models/appointment')

// GET: /api/appointments => return all appointment data as json
router.get('/', (req, res) => {
    Appointment.find((err, appointments) => {
        if (err) {
            return res.json(err).status(404)
        }
        else {
            return res.json(appointments).status(200)
        }
    }).sort('name')
})

// POST: /api/appointments => create a new empployer
router.post('/', (req,res)=>{
    Appointment.create(req.body, (err, appointment)=>{
        if (err) {
            return res.json(err).status(404)
        }
        else {
            return res.json(appointment).status(201)
        }
    })
})

// DELETE: /api/appointments/abc123 => delete selected appointment
router.delete('/:_id', (req, res) => {
    Appointment.deleteOne({ _id: req.params._id }, (err, deleteResponse) => {
        if (err) {
            return res.json(err).status(400)
        }
        else {
            res.json(deleteResponse).status(200)
        }
    })
})

// PUT: /api/appointments/abc123 => updated seleted appointment
router.put('/:_id', (req, res) => {
    Appointment.findOneAndUpdate({ _id: req.params._id }, req.body, (err, appointment) => {
        if (err) {
            return res.json(err).status(400)
        }
        else {
            res.json(appointment).status(202)
        }
    })
})

module.exports = router