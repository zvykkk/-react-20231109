import React, {useState} from "react";
import {Counter} from "../counter/component";

export const Dish = ({dish}) => {
    const [amount, setAmount] = useState(0);

    if (!dish) {
        return null;
    }

    return (
        <div>
            <li>{dish.name}</li>
            <Counter
                value={amount}
                increment={() => setAmount(amount + 1)}
                decrement={() => setAmount(amount - 1)}
            />
        </div>
        );
};