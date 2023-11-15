import ReactDom from "react-dom";
import React from  "react";

import { restaurants } from "./constants/mock";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <div>
        <div>
        <span>{restaurants[0].name}</span>
        <h3>Menu</h3>
        <ul>
            <li>{restaurants[0].menu[0].name}</li>
            <li>{restaurants[0].menu[1].name}</li>
            <li>{restaurants[0].menu[2].name}</li>
        </ul>
        <h3>Reviews</h3>
        <ul>
            <li>{restaurants[0].reviews[0].text}</li>
            <li>{restaurants[0].reviews[1].text}</li>
        </ul>
        </div>
        <div>
            <span>{restaurants[1].name}</span>
            <h3>Menu</h3>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>
            </ul>
            <h3>Reviews</h3>
            <ul>
                <li>{restaurants[1].reviews[0].text}</li>
                <li>{restaurants[1].reviews[1].text}</li>
                <li>{restaurants[1].reviews[2].text}</li>
            </ul>
        </div>
        <div>
            <span>{restaurants[2].name}</span>
            <h3>Menu</h3>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <h3>Reviews</h3>
            <ul>
                <li>{restaurants[2].reviews[0].text}</li>
            </ul>
        </div>
        <div>
            <span>{restaurants[3].name}</span>
            <h3>Menu</h3>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <h3>Reviews</h3>
            <ul>
                <li>{restaurants[3].reviews[0].text}</li>
                <li>{restaurants[3].reviews[1].text}</li>
            </ul>
        </div>
    </div>
);
