import styles from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router'

export default function Navbar() {

    const router = useRouter();

    return (
        <div className={styles.navbar}>
            <div onClick={() => router.push('/')} className={styles.link}>
                <h3>Home</h3>
            </div>
            <div onClick={() => router.push('/about')} className={styles.link}>
                <h3>About</h3>
            </div>
            <div className={styles.link}> 
                <h3>Theme</h3>
            </div>
        </div>
    )
}