import {useTheme} from "../../contexts/theme/hooks";
import classNames from "classnames";
import styles from './styles.module.css';

export const Button = ({children, onClick, disabled, className}) => {
    const {theme} = useTheme();

    return <button
        onClick={onClick}
        disabled={disabled}
        className={classNames(className, {
            [styles.light]: theme === 'light',
            [styles.dark]: theme === 'dark',
        })}
    >
        {children}
    </button>
};