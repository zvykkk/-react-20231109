import React from  "react";
import classNames from "classnames";
import styles from "./styles.module.css"

export const Review = ({text, className}) => {
    return <div className={classNames(
        styles.root,
        className
    )}>{text}</div>;
};