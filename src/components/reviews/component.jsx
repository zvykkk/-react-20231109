import React from  "react";
import {Review} from "../review/component";
import classNames from "classnames";
import styles from './styles.module.css'

export const Reviews = ({reviews, className}) => {
    return (
        <div className={classNames(
            styles.root,
            className
        )}>
            <h3 className={styles.title}>Reviews</h3>
            <div>
                {reviews.map((review) => <Review text={review.text} className={styles.review}/>)}
            </div>
        </div>
    );
};