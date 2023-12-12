import React from  "react";

import styles from "./styles.module.css"

import {Tab} from "../tab/component"

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div className={styles.root}>
            {restaurants.map(({name, id}) => (
                <Tab
                    onClick={ () => onTabClick(id)}
                    name = {name}
                    className={styles.tab}
                />
            ))}
        </div>
    );
};