import React from  "react";

import {Tab} from "../tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            {restaurants.map((restaurant) => (
                <Tab onClick={ () => onTabClick(restaurant.name)} name = {restaurant.name}/>
            ))}
        </div>
    );
};