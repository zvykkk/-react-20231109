import React from  "react";

import styles from "./styles.module.css"

import {Tab} from "../tab/component"
import {Button} from "../button/component";

export const RestaurantTabs = ({restaurants, onTabClick}) => {
    return (
        <div className={styles.root}>
            {restaurants.map(({name, id}) => (
                <Button
                    onClick={ () => onTabClick(id)}
                    children={name}
                    className={styles.button}
                />
            ))}
        </div>
    );
};