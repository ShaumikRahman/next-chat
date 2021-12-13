import styles from "../styles/Chat.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const input = useRef();
  const router = useRouter();
  const name = router.query.name;
  let socket;

  useEffect(() => {
    if (!name) {
      router.push("/");
    }

    socket = io("http://localhost:8080", {
        transports: ["websocket"],
        query: {
          name,
        },
      });
      
  }, []);

  if (socket) {
    console.log('valid');
  }

  function newMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }

  function processMessage(e) {
    e.preventDefault();

    const message = e.target.message.value.trim();

    setMessages([...messages, message]);
    e.target.reset();
    input.current.focus();
  }

  return (
    <div className="container">
      {name}
      <div className={styles.messages}>
        {messages.map((message, index) => {
          return (
            <p key={index} className={styles.message}>
              {message}
            </p>
          );
        })}
      </div>
      <div className={styles.form}>
        <form onSubmit={(e) => processMessage(e)}>
          <input type="text" name="message" id="message" ref={input} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
