import React from  "react";
import {Review} from "../review/component";

export const Reviews = ({reviews}) => {
    return (
        <div>
            <h3>Reviews</h3>
            <ul>
                {reviews.map((review) => <Review text={review.text}/>)}
            </ul>
        </div>
    );
};