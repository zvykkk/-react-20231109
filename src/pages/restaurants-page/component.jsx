import React, {useState} from "react";

import {RestaurantTabs} from "../../components/restaurant-tabes/component";
import {Restaurant} from "../../components/restaurant/component";

export const RestaurantsPage = ({restaurants}) => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(0);

    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    return <div>
        <RestaurantTabs
            restaurants = {restaurants}
            onTabClick={setActiveRestaurantId}
        />
        {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
    </div>;
};