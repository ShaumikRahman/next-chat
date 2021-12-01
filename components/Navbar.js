import styles from '../styles/Navbar.module.scss'

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <div className={styles.link}>
                <h3>Home</h3>
            </div>
            <div className={styles.link}>
                <h3>About</h3>
            </div>
            <div className={styles.link}> 
                <h3>Theme</h3>
            </div>
        </div>
    )
}