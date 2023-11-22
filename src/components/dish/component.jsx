import React, {useState} from "react";
import {Counter} from "../counter/component";

export const Dish = ({dish}) => {
    const [numberDishes, setNumberDishes] = useState(0);

    if (!dish) {
        return null;
    }

    return (
        <div>
            <li>{dish.name}</li>
            <Counter
                number={numberDishes}
                increment={() => numberDishes < 5 && setNumberDishes(numberDishes + 1)}
                decrement={() => numberDishes && setNumberDishes(numberDishes - 1)}
            />
        </div>
        );
};