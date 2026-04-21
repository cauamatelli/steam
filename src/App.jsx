import { useState } from 'react'
import tails from './assets/tails.jpg'
import spider from './assets/spider.jpg'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='foto'><img src={tails} alt="" /></section>
    <section className='tudo'>
      <img src={logo} alt="" />
    <h1>Iniciar Sessão</h1>
    <div className='quadrado'>
    <p className='inicio'>iniciar sessão com nome de usuario</p>
    <input type="text" />

    <p className='senha'>senha</p>
    <input type="text" />

    <button>Iniciar Sessão</button>

    </div>
    </section>
    

    </>
  )
}

export default App
