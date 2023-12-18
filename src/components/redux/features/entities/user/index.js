import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

import {REQUEST_STATUSES} from "../../../../../constants/request-statuses";
import {getUsers} from "./thunk/get-users";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: 'user',
    initialState: entityAdapter.getInitialState({status: REQUEST_STATUSES.idle}),
    extraReducers: (builder) =>
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = REQUEST_STATUSES.pending;
            })
            .addCase(getUsers.fulfilled, (state, {payload}) => {
                console.log(payload)
                entityAdapter.setAll(state, payload);
                state.status = REQUEST_STATUSES.fulfilled;
            })
            .addCase(getUsers.rejected, (state) => {
                state.status = REQUEST_STATUSES.rejected;
            }),
});