import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRestaurantDishId} from "../../restaurant/selectors";
import {selectDishIds} from "../selectors";

export const getDishes = createAsyncThunk(
    "restaurant/getDishes",
    async (restaurantId) => {
        const response = await fetch("http://localhost:3001/api/dishes?restaurantId=${restaurantId}");
        const result = await response.json();
        console.log(result);

        return result;
    },
    {
        condition: (restaurantId, {getState}) => {

            const state = getState();
            const restaurantDishIds = selectRestaurantDishId(state, restaurantId);
            const dishIds = selectDishIds(state);

            return !restaurantDishIds.every((id) => dishIds.includes(id))
        }
    }
);