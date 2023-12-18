import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantReviewId} from "../../restaurant/selectors";
import {selectReviewIds} from "../selectors";

export const getReviews = createAsyncThunk(
    "restaurant/getReviews",
    async (restaurantId) => {
        const response = await fetch("http://localhost:3001/api/reviews?restaurantId=${restaurantId}");
        const result = await response.json();

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {

            const state = getState();
            const restaurantReviewIds = selectRestaurantReviewId(state, restaurantId);
            const reviewIds = selectReviewIds(state);

            return !restaurantReviewIds.every((id) => reviewIds.includes(id))
        }
    }
);