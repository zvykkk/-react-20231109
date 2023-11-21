import React from  "react";

import {RestaurantTab} from "../restaurant-tab/component"

export const RestaurantTabs = ({names}) => {
    return (
        <div>
            {names.map((name) => (
                <RestaurantTab name = {name}/>
            ))}
        </div>
    );
};