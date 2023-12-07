import React, {useState} from "react";

import {RestaurantTabs} from "../../components/restaurant-tabes/component";
import {Restaurant} from "../../components/restaurant/component";

import {Layout} from "../../components/layout/component";
import {OrderFormGroup} from "../../components/order-form-group/component";

export const RestaurantsPage = ({restaurants}) => {

    const [activeRestaurantId, setActiveRestaurantId] = useState(null);

    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    );

    return (
            <Layout>
            <RestaurantTabs
            restaurants = {restaurants}
            onTabClick={setActiveRestaurantId}
            />
            {activeRestaurant && <Restaurant restaurant={activeRestaurant}/>}
            {/*<OrderFormGroup/>*/}
            </Layout>
    )
};