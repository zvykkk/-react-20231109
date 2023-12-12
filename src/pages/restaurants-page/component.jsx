import React, {useState} from "react";
import {Layout} from "../../components/layout/component";
import {RestaurantContainer} from "../../components/restaurant/container";
import {RestaurantTabsContainer} from "../../components/restaurant-tabes/container";


export const RestaurantsPage = () => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(null);


    return (
            <Layout>
            <RestaurantTabsContainer onTabClick={setActiveRestaurantId}/>
            {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId}/>}
            </Layout>
    )
};