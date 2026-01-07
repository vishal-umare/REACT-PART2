import { useState } from "react"
import "./Lottery.css";
import { GenerateTicket ,sum} from "./helper";

export default function Lottery(){
    let [ticket , setTicket] = useState(GenerateTicket(3));
    let isWinning = sum(ticket) === 15 ;

    function newTicket(){
        setTicket(() =>{
            return GenerateTicket(3);
        })
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="Lottery">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button className="Lottery" onClick={newTicket}>New Ticket</button>
            <h2>{isWinning && "Congratulatons you won !!" }</h2>
        </div>
    )
}