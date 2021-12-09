import styles from '../styles/Chat.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const name = router.query

  useEffect(() => {
    const socket = io('http://localhost:8080', { 
      transports: ['websocket']
    });
  });

  function processMessage(e) {
    e.preventDefault();

    const message = e.target.message.value.trim();

    setMessages([...messages, message]);
  }

  return (
    <div className="container">
      {messages.map((message, index) => {
        return <p key={index}>{message}</p>
      })}
      <form onSubmit={e => processMessage(e)}>
        <input type="text" name="message" id="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}