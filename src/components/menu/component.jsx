import React from  "react";
import {Dish} from "../dish/component";

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
            {menu.map((dish) => <Dish name={dish.name}/>)}
            </ul>
        </div>
    );
};