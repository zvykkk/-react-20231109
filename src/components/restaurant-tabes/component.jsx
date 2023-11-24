import React from  "react";

import {Tab} from "../tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div>
            {restaurants.map(({name, id}) => (
                <Tab onClick={ () => onTabClick(id)} name = {name}/>
            ))}
        </div>
    );
};