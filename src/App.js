import { useEffect, useState } from "react";
import TaskTracker from "./components/TaskTracker";
import { addTask, getAllTask } from "./components/utils/Handle-api";
// import logo from './logo.svg';
// import './App.css';

  function App() {

    const [taskTracker, setTask] = useState([])
    const [text, setText] = useState("")

    useEffect(() => {
      getAllTask(setTask)
    }, [])
    
    return (
      <div className="App">
      
        <div className="container">
          
          <h1>Task Tracker App</h1>

          <div className="top">
            <input
            type="text"
            placeholder="Add Tasks..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            ></input>

            <div className="add" onClick={() => addTask(text, setText, setTask)}>Add</div>
          </div>

          <div className="list">

            {taskTracker.map((item) => <TaskTracker key={item._id} text={item.text}/>)}

            {/* <TaskTracker text="Hello" />
            <TaskTracker text="Hello" />
            <TaskTracker text="Hello" /> */}
          </div>

        </div>
      
      </div>
    );
  }

export default App;
