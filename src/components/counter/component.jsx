import React from  "react";
import classNames from "classnames";
import styles from "./styles.module.css"

export const Counter = ({value, increment, decrement, min = 0, max = 5, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <button onClick={decrement} disabled={value <= min} className={styles.bottom}>-</button>
            {value}
            <button onClick={increment} disabled={value >= max} className={styles.bottom}>+</button>
        </div>
        )
};