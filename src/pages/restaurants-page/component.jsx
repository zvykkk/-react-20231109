import React from  "react";

import {RestaurantTabs} from "../../components/restaurant-tabes/component";
import {Restaurants} from "../../components/restaurants/component";

export const RestaurantsPage = ({restaurants}) => {

    const names = Array.from(new Set(restaurants.map(({ name }) => name)));

    return <div>
        <RestaurantTabs names = {names}/>
        <Restaurants restaurants = {restaurants}/>
    </div>;
};