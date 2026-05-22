import styles from './Listagem.module.css'

function Listagem() {
  return (
    <main className={styles.main}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td>Jogo</td>
            <td>Desenvolvedora</td>
            <td>Ano</td>
            <td>Copias Vendidas</td>
            <td>Editar</td>
            <td>Excluir</td>
          </tr>
          <tr>
            <td>God of War 2018</td>
            <td>Sony</td>
            <td>2018</td>
            <td>23 Milhões</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>GTA V</td>
            <td>Rockstar</td>
            <td>2013</td>
            <td>215 Milhões</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>Red Dead Redeption 2</td>
            <td>Rockstar</td>
            <td>2018</td>
            <td>85 Milhões</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
          <tr>
            <td>The Last of Us 2</td>
            <td>Sony</td>
            <td>2020</td>
            <td>10 Milhões</td>
            <td>📝</td>
            <td>🗑️</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Listagem