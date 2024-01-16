const {Router} = require("express");
const { getTaskTracker, saveTaskTracker, updateTaskTracker, deleteTaskTracker } = require("../controllers/Task_tracker-controller");
// const { saveTaskTracker } = require("../controllers/Task_tracker-controller")

const router = Router()

// updated this lines of code(for testing and showing text on localhost:5000) to the router.get/post below
//  router.get('/', (req, res) => {
    // res.json({message: "Hi there..."})
// })

// updated to this line of code to create and get Task Tracker routes in dir
// controller and connect and update mongoDB
router.get('/', getTaskTracker)
router.post('/save', saveTaskTracker)
router.post('/update', updateTaskTracker)
router.post('/delete', deleteTaskTracker)

module.exports = router;