import {createSlice} from "@reduxjs/toolkit";
import {REQUEST_STATUSES} from "../../../../../constants/request-statuses";
import {getDishes} from "./thunk/get-dishes";

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.idle,
    },

    extraReducers: (builder) =>
        builder
            .addCase(getDishes.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getDishes.fulfilled, (state, {payload}) => {
                state.entities = payload.reduce((acc, dish) => {
                    acc[dish.id] = dish;

                    return acc;
                }, state.entities);
                state.ids = Array.from(new Set([...state.ids, ...payload.map(({id}) => id)]));
            })
            .addCase(getDishes.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            })
});