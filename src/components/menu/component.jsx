import React from  "react";
import {Dish} from "../dish/component";

export const Menu = ({dishes}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
            {dishes.map((dish) => <Dish dish={dish}/>)}
            </ul>
        </div>
    );
};