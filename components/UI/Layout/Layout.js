import Toolbar from "../Toolbar/Toolbar"

import styles from "./Layout.module.scss"

const Layout = (props) => (
    <>
        <Toolbar />
        <main className={styles.main}>
            {props.children}
        </main>
    </>
)

export default Layout;