import React from  "react";

import styles from "./styles.module.css"

import {Tab} from "../tab/component"
import {Button} from "../button/component";
import {RestaurantTabContainer} from "../restaurant-tab/container";

export const RestaurantTabs = ({restaurantIds, onTabClick}) => {
    return (
        <div className={styles.root}>
            {restaurantIds.map((id) => (
                <RestaurantTabContainer
                    restaurantId={id}
                    onClick={ () => onTabClick(id)}
                    className={styles.button}
                />
            ))}
        </div>
    );
};