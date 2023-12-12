import {Header} from "../header/componebt";
import {Footer} from "../footer/component"
import styles from "./styles.module.css"
import "../../styles/index.css"

export const Layout = ({children}) => {
    return (
        <div className={styles.root}>
            <Header className={styles.header}/>
            <main className={'container'}>{children}</main>
            <Footer/>
        </div>
    )
}