import Task from "./Task";

function TaskList(props) {

    const {tasks} = props;

    return (
        <div className={'col-sm'}>
            <h3>Tasks</h3>
            {tasks.map((task, i) => <Task key={i} task={task}/>)
            }
        </div>
    )
}

export default TaskList;