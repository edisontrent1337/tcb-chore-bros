import {useState} from "react";
import search from "@jukben/emoji-search";

function EmojiPicker(props) {
    const [searchTerm, setSearchTerm] = useState('');
    const results = search(searchTerm);
    const {setEmoji} = props;
    return (
        <div style={{
            width: '200px',
        }}>
            <label>Emoji Picker</label>
            <div className={'py-2 d-flex'}>
                <input onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div style={{
                height: '100px',
                overflowY: 'scroll',
                border: '1px solid grey',
                borderRadius: '8px'
            }}>
                {results.map((r, i) =>
                    <span style={{fontSize: '20px'}} key={i} onClick={_ => setEmoji(r.char)}>{r.char}</span>)}
            </div>
        </div>
    );
}

export default EmojiPicker;