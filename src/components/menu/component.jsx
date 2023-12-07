import React from  "react";
import {Dish} from "../dish/component";
import styles from "./styles.module.css"
import classNames from "classnames";

export const Menu = ({dishes, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <h3 className={styles.title}>Menu</h3>
            <div>
            {dishes.map((dish) => (
                <Dish dish={dish} className={styles.dish}/>
                ))}
            </div>
        </div>
    );
};