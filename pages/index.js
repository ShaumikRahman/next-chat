import styles from '../styles/Index.module.scss'

export default function Index() {

  function process(e) {
    e.preventDefault();

    let str = e.target.name.value.replace(/\W/g, ' ').replace(/\s\s+/g, ' ').trim();
    console.log(str);
  }

  return (
    <div className="container">
      <h1 className={styles.title}>Next Chat</h1>
      <form className={styles.form} onSubmit={e => process(e)}>
        <input type="text" placeholder="Enter Name" id="name"/>
        <button type="submit">Join</button>
      </form>
    </div>
  )
}