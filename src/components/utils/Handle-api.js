import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllTask = (setTask) => {

    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log('data --->', data);
        setTask(data)
    })
}

// add a const for onclick add button in Handle-api file
// the text has to be updated in the database
// setText and setTask are from the Handle-api file
const addTask = (text, setText, setTask) => {

    axios
    // pass text to the body
    .post(`${baseUrl}/save`, {text})
    // take data and log it
    .then((data) => {
        console.log(data);
        // clear text field
        setText("")
        // catch/get all tasks
        getAllTask(setTask)
    })

}

export {getAllTask, addTask}