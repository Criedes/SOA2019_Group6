const Message = require('../model/messageModel')


exports.updateMessage = (req, res) => {
    console.log('<<<<<<<<POST REQUEST IS RECIEVED>>>>>>>>>>>')
    console.log(req.body)
    updateData = () => { Message.update({ personID: { $all: [req.body.myID, req.body.targetID]}}, { $push: { messages: [[req.body.name, req.body.message]] }},
        (err, data) => {
            console.log(data)
        })
    }
    Message.find({ personID: {$all: [req.body.myID, req.body.targetID]}}, (err, messages) => {
        if (messages.length == 0) {
            console.log("No Obj")
            var message = new Message({
                personID: [req.body.myID, req.body.targetID],
                persons: [req.body.name, req.body.target],
                messages: []
            })
            message.save((err) => {

            })
        } else {
            console.log("Obj exist")
            updateData()
        }
    })
}

exports.getMessage = (req, res) => {
    console.log(req.query.name)
    console.log(req.query.target)
    Message.find({ persons: {$all: [req.query.name, req.query.target]}}, (err, messages) => {
        res.json(messages)
        console.log(messages)
    })
}