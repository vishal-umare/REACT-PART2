// Like button Activity 

import { useState } from "react";
export default function LikeButton(){

    let [IsLike, setIsLike] = useState(false);
    
    let newStyles = {color:"red"};
    
    function Click(){
        setIsLike(!IsLike);
    }
    return(
        <div>
            <h2 onClick={Click}>
                {IsLike ? <i className="fa-solid fa-heart" style={newStyles}></i> : <i className="fa-regular fa-heart"></i>}
            </h2>
        </div>
    )
}