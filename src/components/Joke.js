import React from "react";

function Joke(props) {
    return (
        <div className="card">
            <h3 style={{display: !props.question && "none"}}> Question: {props.question} </h3>
            <h3 style={{color: !props.question && "#DDD"}}>Answer: {props.punchLine}</h3>
        </div>
    )
}

export default Joke;