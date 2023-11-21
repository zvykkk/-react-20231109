import ReactDom from "react-dom/client";
import React from  "react";

import {App} from "./App";
import {restaurants} from "./constants/mock"

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App restaurants={restaurants}/>);
