import React, {useState} from "react";

import {Menu} from "../menu/component";
import {Reviews} from "../reviews/component";
import {ReviewForm} from "../review-form/component";
import styles from "./styles.module.css"

export const Restaurant = ({restaurant}) => {
    if (!restaurant){
        return null;
    }

    const {name, menu, reviews} = restaurant;

    return <div className={styles.root}>
        <h2 className={styles.title}>{name}</h2>
        <Menu dishes = {menu} className={styles.menu}/>
        <Reviews reviews = {reviews} className={styles.reviews}/>
        <ReviewForm className={styles.reviewForm}/>
    </div>
};