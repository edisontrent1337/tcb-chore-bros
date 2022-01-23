import './App.css';
import {useEffect, useState} from 'react';
import taskData from './tasks/tasks.json';
import TaskList from './tasks/TaskList';
import TaskCreator from "./tasks/TaskCreator";

function App() {

    const [tasks, setTasks] = useState(taskData);

    useEffect(() => {
        [tasks].map(e => console.log(e))
    })

    function createTask(taskName, emoji) {
        setTasks([...tasks, {
            'name': taskName,
            'unicodeEmoji': emoji
        }])
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
