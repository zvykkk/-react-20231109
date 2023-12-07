import React from  "react";

import styles from "./styles.module.css"
import classNames from "classnames";

export const Tab = ({name, onClick, className}) => {
    return <button
            className={classNames(className, styles.button)}
            onClick={onClick}
            >{name}
            </button>;
};