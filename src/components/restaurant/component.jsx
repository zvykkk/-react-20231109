import React from  "react";

import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";

export const Restaurant = ({restaurant}) => {
    if (!restaurant){
        return null;
    }

    const {name, menu, reviews} = restaurant;

    return <div>
        <h2>{name}</h2>
        <Menu dishes = {menu}/>
        <Reviews reviews = {reviews}/>
    </div>
};