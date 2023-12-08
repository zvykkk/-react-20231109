import React from  "react";
import classNames from "classnames";
import styles from "./styles.module.css"
import {Button} from "../button/component";

export const Counter = ({value, increment, decrement, min = 0, max = 5, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <Button onClick={decrement} disabled={value <= min} className={styles.bottom} >-</Button>
            {value}
            <Button onClick={increment} disabled={value >= max} className={styles.bottom}>+</Button>
        </div>
        )
};