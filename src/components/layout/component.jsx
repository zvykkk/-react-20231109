import {Header} from "../header/component";
import {Footer} from "../footer/component"
import styles from "./styles.module.css"
import "../../styles/index.css"
import {ThemeProvider} from "../../contexts/theme/component";

export const Layout = ({children}) => {
    return (
        <ThemeProvider>
        <div className={styles.root}>
            <Header className={styles.header}/>
            <main className={'container'}>{children}</main>
            <Footer/>
        </div>
        </ThemeProvider>
    )
}