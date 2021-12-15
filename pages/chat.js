import styles from "../styles/Chat.module.scss";
import { useState, useRef } from "react";
import io from "socket.io-client";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const input = useRef();

  const socket = io("http://localhost:8080", {
    transports: ["websocket"],
  });

  socket.on("message", (message) => {
    newMessage(message);
  });

  function newMessage(newMessage) {
    setMessages([...messages, newMessage]);
  }

  function processMessage(e) {
    e.preventDefault();

    const message = e.target.message.value.trim();

    if (message) {
      socket.emit("message", message);
    } else {
      console.log(socket, "failed");
    }

    e.target.reset();
    input.current.focus();
  }

  return (
    <div className={styles.container}>
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
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Type message..."
            ref={input}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
