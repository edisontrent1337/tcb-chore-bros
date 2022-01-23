import './App.css';
import {useEffect, useState} from 'react';
import taskData from './tasks/tasks.json';
import TaskList from './tasks/TaskList';
import TaskCreator from "./tasks/TaskCreator";

function App() {

    const [tasks, setTasks] = useState(taskData);
    console.log(tasks);
    useEffect(() => {
        tasks.map(task => console.log(task))
    })

    // first build a static version
    function createTask(name, unicodeEmoji) {
        const updatedTasks = [...tasks, {name, unicodeEmoji}]
        setTasks(updatedTasks);
    }

    return (
        <div className={'container p-4'}>
            <div className={'row'}>
                <TaskList tasks={tasks}/>
                <TaskCreator createTask={createTask}/>
            </div>
        </div>
    );
}

export default App;
