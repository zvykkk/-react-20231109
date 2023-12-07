import React, {useState} from "react";
import {Counter} from "../counter/component";
import classNames from "classnames";
import styles from './styles.module.css';

export const Dish = ({dish, className}) => {
    const [amount, setAmount] = useState(0);

    if (!dish) {
        return null;
    }

    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <span>{dish.name}</span>
            <Counter
                value={amount}
                increment={() => setAmount(amount + 1)}
                decrement={() => setAmount(amount - 1)}
                className={styles.counter}
            />
        </div>
        );
};