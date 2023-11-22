import React from  "react";

export const Counter = ({number, increment, decrement}) => {
    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{number}</span>
            <button onClick={decrement}>-</button>
        </div>
        )
};