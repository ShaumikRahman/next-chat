import styles from '../styles/Index.module.scss'
import { useRouter } from 'next/router'

export default function Index() {

  const router = useRouter();

  return (
    <div className="container">
      <h1 className={styles.title}>Next Chat</h1>
      <button className={styles.join} onClick={() => router.push('/chat')}>Join</button>
    </div>
  )
}