import classNames from "classnames";
import styles from "./styles.module.css"
import {useTheme} from "../../contexts/theme/hooks";
import {Button} from "../button/component";
import {ThemeProvider} from "../../contexts/theme/component";

export const Header = ({className}) => {
    const {toggleTheme} = useTheme();

    return (
    <div className={classNames(styles.root, className)}>
        <ThemeProvider>
        <Button onClick={toggleTheme} className={styles.toggleTheme}>toggle theme</Button>
        <Button className={styles.order}>Order</Button>
        </ThemeProvider>
    </div>
    );
}