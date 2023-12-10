import React from  "react";
import classNames from "classnames";
import styles from './styles.module.css'
import {ReviewContainer} from "../review/container";

export const Reviews = ({reviewIds, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <h3 className={styles.title}>Reviews</h3>
            <div>
                {reviewIds.map((id) => <ReviewContainer reviewId={id} className={styles.review}/>)}
            </div>
        </div>
    );
};