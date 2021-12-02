import styles from '../styles/Chat.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import io from 'socket.io-client'

export default function Chat() {
  const router = useRouter();
  const name = router.query

  useEffect(() => {
    const socket = io('http://localhost:8080', { 
      transports: ['websocket']
    });
  });

  return (
    <div className="container">
      <h1>Test</h1>
    </div>
  )
}