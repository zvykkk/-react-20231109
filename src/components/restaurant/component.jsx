import React from  "react";

import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";

export const Restaurant = ({restaurant}) => {
    return <div>
        <span>{restaurant.name}</span>
        <Menu menu = {restaurant.menu}/>
        <Reviews reviews = {restaurant.reviews}/>
    </div>
};