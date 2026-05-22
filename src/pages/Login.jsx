import { useState } from 'react'
import tails from '../assets/tails.jpg'
import spider from '../assets/spider.jpg'
import logo from '../assets/steam.png'
import styles from './Login.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className={styles.foto}><img src={tails} alt="" /></section>
      <section className={styles.tudo}>
        <img src={logo} alt="" />
        <h1>Iniciar Sessão</h1>
        <div className={styles.quadrado}>
          <p className={styles.inicio}>iniciar sessão com nome de usuario</p>
          <input type="text" />
          <p className={styles.senha}>senha</p>
          <input type="text" />
          <button>Iniciar Sessão</button>
        </div>
      </section>
    </>
  )
}

export default App