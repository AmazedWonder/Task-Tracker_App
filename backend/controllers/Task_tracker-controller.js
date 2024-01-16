const TaskTrackerModel = require('../models/Task_tracker-model')

// code to get tasks
module.exports.getTaskTracker = async (req, res) => {
    const taskTracker = await TaskTrackerModel.find()
    res.send(taskTracker)
}

// code to save tasks
module.exports.saveTaskTracker = async (req, res) => {

    const { text } = req.body

    TaskTrackerModel
        .create({text})
        .then((data) => {
            console.log("Added Successfully...");
            console.log(data);
            res.send(data);
        })
}

// code to update tasks
module.exports.updateTaskTracker = async (req, res) => {
    const {_id, text} = req.body

    TaskTrackerModel
    .findByIdAndUpdate(_id, {text})
    .then(()=> res.send("Updated Successfully..."))
    .catch((err) => console.log(err))
}

// code to delete tasks
module.exports.deleteTaskTracker = async (req, res) => {
    const { _id } = req.body

    TaskTrackerModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfully..."))
    .catch((err) => console.log(err))
}