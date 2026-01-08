import { useState } from "react"
import {GenerateTicket ,sum} from "./helper"
import Ticket from "./Ticket";

export default function Lottery({ n=3, winSum =15}){
    let [ticket , setTicket] = useState(GenerateTicket(n));
    let isWinning = sum(ticket) === winSum ;

    function newTicket(){
        setTicket(() =>{
            return GenerateTicket(n);
        })
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="Lottery">
                <Ticket ticket = {ticket}/>
            </div>
            <br />
            <button className="Lottery" onClick={newTicket}>New Ticket</button>
            <h2>{isWinning && "Congratulatons you won !!" }</h2>
        </div>
    )
}