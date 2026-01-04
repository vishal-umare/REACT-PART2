import { useState } from "react";

export default function LudoBoard(){

    let [moves , setMoves] = useState({blue:0 , red:0 , green:0 , yellow:0});

    // function updateBlue(){
    //     moves.blue += 1 ;
    //     console.log(moves.blue);
    //     setMoves(() =>{
    //         return {moves}; //we dont write like this beacuse it wont change the object value
    //     })
    // }

    function updateBlue(){
        moves.blue += 1 ;
        console.log(moves.blue);
        setMoves((PrevMoves) =>{
            return {...PrevMoves};
        })
    }
    function updateRed(){
        moves.red += 1 ;
        console.log(moves.red);
        setMoves((PrevMoves) =>{
            return {...PrevMoves};
        })
    }
    function updateGreen(){
        moves.green += 1 ;
        console.log(moves.green);
        setMoves((PrevMoves) =>{
            return {...PrevMoves};
        })
    }
    function updateYellow(){
        moves.yellow += 1 ;
        console.log(moves.yellow);
        setMoves((PrevMoves) =>{
            return {...PrevMoves};
        })
    }
    return (
        <div>
            <h1>Game Begins !!</h1>

            <p>Blue Moves = {moves.blue}</p>
            <button style={{backgroundColor : "blue"}} onClick={updateBlue}>+1</button>

            <p>Red Moves = {moves.red}</p>
            <button style={{backgroundColor : "red"}} onClick={updateRed}>+1</button>

            <p>Green Moves = {moves.green}</p>
            <button style={{backgroundColor : "green"}} onClick={updateGreen}>+1</button>

            <p>Yellow Moves = {moves.yellow}</p>
            <button style={{backgroundColor : "rgba(120, 129, 65, 1)"}} onClick={updateYellow}>+1</button>
        </div>
    )
}