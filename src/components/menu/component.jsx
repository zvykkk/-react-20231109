import React from  "react";

export const Menu = ({menu}) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
            {menu.map((dish) => <li>{dish.name}</li>)}
            </ul>
        </div>
    );
};