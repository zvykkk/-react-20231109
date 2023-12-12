import classNames from "classnames";
import styles from "./styles.module.css"
import {Button} from "../button/component";

export const Footer = ({className}) => {
    return (
        <div className={classNames(styles.root, className)}>
        <Button className={styles.contacts}>contacts</Button>
        </div>
    )
}