//import './Task.css';

function Task(props) {
    const {task} = props;
    const {name, unicodeEmoji} = task;
    return (
        <div className={'chore d-flex'}>
            <div className={'emoji'}>
                <div className={'nested-emoji'}>{unicodeEmoji}</div>
            </div>
            <div className={'chore-name'}>{name}</div>
        </div>
    )
}

export default Task;