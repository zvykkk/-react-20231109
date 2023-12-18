import React, {useEffect, useState} from "react";
import {ReviewForm} from "../review-form/component";
import styles from "./styles.module.css"
import {MenuContainer} from "../menu/container";
import {ReviewsContainer} from "../reviews/container";

export const Restaurant = ({restaurant}) => {
    if (!restaurant){
        return null;
    }

    const {name, menu, reviews} = restaurant;

    return <div className={styles.root}>
        <h2 className={styles.title}>{name}</h2>
        <MenuContainer restaurantId={restaurant.id} className={styles.menu}/>
        <ReviewsContainer restaurantId={restaurant.id} className={styles.reviews}/>
        <ReviewForm className={styles.reviewForm}/>
    </div>
};