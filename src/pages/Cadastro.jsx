import logo from '../assets/steam.png'
import styles from './Cadastro.module.css'

function Cadastro() {
  return (
    <main>
      <div className={styles.login}>
        <img src={logo} alt="Steam" className={styles.logo} />
        <h1>Cadastre-se</h1>
        <div className={styles.borda}>
          <input type="text" className={styles.nome} placeholder="Nome"/>
          <input type="email" className={styles.email} placeholder="Email" />
          <input type="password" className={styles.senha1} placeholder="Senha" />
          <input type="password" className={styles.senha2} placeholder="Confirme sua senha" />
          <input type="submit" className={styles.entrar} value="Enviar"/>
        </div>
      </div>
    </main>
  )
}

export default Cadastro