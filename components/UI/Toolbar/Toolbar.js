import react from "react";
import Link from "next/link"

import styles from "./Toolbar.module.scss"

const Toolbar = () => (
    <div className={styles.toolbar}>
        <div className={styles.inner}>
            <Link href="/">
                <a>
                    <div className={styles.brand}>Peter Hruza Photography</div>
                </a>
            </Link>
        </div>
    </div>
)

export default Toolbar;