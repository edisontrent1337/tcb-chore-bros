import './App.css';
import '@mdi/font/css/materialdesignicons.min.css';
import {useState} from "react";
import choreData from './chores/chores.json';
import Chore from "./chores/Chore";
import search from "@jukben/emoji-search";

function App() {

    const [chores, setChores] = useState(choreData);
    const [searchTerm, setSearchTerm] = useState("");
    const [taskName, setTaskName] = useState("");
    const [emoji, setEmoji] = useState("");

    const results = search(searchTerm);
    return (
        <div className={"container"}>
            <div className={'w-100 pt-5'}>
                <h3>Tasks</h3>

                {chores.map((c, i) => <Chore key={i} chore={c}/>)
                }
            </div>
            <h3>Neuen Task erstellen</h3>
            <label>Name</label>
            <div className={'py-2'}>
                <input type={'text'} onChange={e => setTaskName(e.target.value)} value={taskName}/>
            </div>
            <label>Emoji</label>
            <div className={'py-2'}>
                <input onChange={(e) => setSearchTerm(e.target.value)}/>
                <span>{emoji}</span>
            </div>
            <div className={'btn btn-primary'} onClick={(e) => setChores([...chores, {"name": taskName, 'unicodeEmoji': emoji }])}>Create Task</div>
            {results.map((r, i) => <span key={i} onClick={e => setEmoji(r.char)}>{r.char}</span>)}
        </div>
    );
}

export default App;
