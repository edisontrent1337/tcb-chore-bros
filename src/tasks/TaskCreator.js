import EmojiPicker from "./EmojiPicker";
import {useState} from "react";

function TaskCreator(props) {
    const [taskName, setTaskName] = useState('');
    const [emoji, setEmoji] = useState('');
    const {createTask} = props;
    console.log(taskName);
    return (
        <div className={'col-sm'}>
            <h3>Neuen Task erstellen</h3>
            <label>Name</label>
            <div className={'py-2'}>
                <input type={'text'} onChange={e => setTaskName(e.target.value)} value={taskName}/>
            </div>

            <EmojiPicker setEmoji={setEmoji}/>
            <div className={'py-2'}>
                <label>Ausgewähltes Emoji: </label>
                <span style={{fontSize: '25px'}}>{emoji}</span>
            </div>
            <div className={'btn btn-primary mt-2'} onClick={() => createTask(taskName, emoji)}>
                Create Task
            </div>
        </div>
    )
}

export default TaskCreator;