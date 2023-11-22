import React, {useState} from "react";

import {RestaurantTabs} from "../../components/restaurant-tabes/component";
import {Restaurants} from "../../components/restaurants/component";

export const RestaurantsPage = ({restaurants}) => {

    const [selectedRestaurantTab, setSelectedRestaurantTab] = useState();

    const filteredRestaurants = restaurants.filter(
        ({name}) => name === selectedRestaurantTab
    );

    return <div>
        <RestaurantTabs
            restaurants = {restaurants}
            onTabClick={setSelectedRestaurantTab}
        />
        <Restaurants restaurants = {filteredRestaurants}/>
    </div>;
};