import React from  "react";
import styles from "./styles.module.css"
import classNames from "classnames";
import {DishContainer} from "../dish/container";

export const Menu = ({dishIds, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <h3 className={styles.title}>Menu</h3>
            <div>
            {dishIds.map((id) => (
                <DishContainer dishId={id} className={styles.dish}/>
                ))}
            </div>
        </div>
    );
};