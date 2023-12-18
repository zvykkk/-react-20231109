import React from  "react";
import store from "./components/redux";
import {Provider} from "react-redux";

import {RestaurantsPageContainer} from "./pages/restaurants-page/container";

export const App = () => {
    return (
        <Provider store={store}>
        <RestaurantsPageContainer />
        </Provider>
    );
}