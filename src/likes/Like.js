import {useState} from "react";

function Like() {

    const [liked, setLiked] = useState(false);
    const outline = liked ? '' : '-outline';

    return (
        <div onClick={(e)=>setLiked(!liked)} className={'btn btn' + outline + '-primary'}><i
            className={'mdi mdi-thumb-up' + outline}/> Like</div>
    )
}

export default Like;