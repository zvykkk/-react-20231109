import React from  "react";
import store from "./components/redux";
import {Provider} from "react-redux";

import {RestaurantsPage} from "./pages/restaurants-page/component";

export const App = () => {
    return (
        <Provider store={store}>
        <RestaurantsPage />
        </Provider>
    );
}