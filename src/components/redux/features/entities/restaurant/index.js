import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {normalizedRestaurants} from '../../../../../constants/normalized-mock'
import {getRestaurants} from "./thunk/get-restaurants";
import {REQUEST_STATUSES} from "../../../../../constants/request-statuses";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getRestaurants.fulfilled,(state,{payload}) => {
                entityAdapter.setAll(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getRestaurants.rejected,(state) => {
                state.status = REQUEST_STATUSES.rejected;
            }),
});