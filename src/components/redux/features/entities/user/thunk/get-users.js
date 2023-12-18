import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectUserIds} from "../selectors";

export const getUsers = createAsyncThunk(
    "getUsers",
    async () => {
        const response = await fetch("http://localhost:3001/api/users/");
        const result = await response.json();

        console.log(result)
        return result;
    },
    {
        condition: (_, {getState}) => !selectUserIds(getState()).length,
    }
);