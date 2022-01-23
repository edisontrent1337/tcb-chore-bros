//import './Chore.css';
import Like from "../likes/Like";

function Chore(props) {
    const { chore } = props;
    const { name, unicodeEmoji } = chore;
    return (
        <div className={'chore d-flex'}>
            <div className={'emoji'}><div className={'nested-emoji'}>{unicodeEmoji}</div></div>
            <div className={'chore-name'}>{name}</div>
        </div>
    )
}

export default Chore;