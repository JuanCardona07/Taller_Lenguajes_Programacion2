import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ejercicios from './components/Ejercicios'
import Sintaxis from './components/Sintaxis'
import Comentario from './components/Comentario'
import Variables_tipodato from './components/Variables_tipodato'
import Numeros from './components/Numeros'
import Strings from './components/Strings'
import Booleanos from './components/Booleanos'
import Operadores from './components/Operadores'
import Funciones from './components/Funciones'
import Objetos from './components/Objetos'
import Matrices from './components/Matrices'
import Comparacion from './components/Comparacion'
import Methods_math from './components/methods_math'
import Condicionales from './components/Condicionales'
import Bucles from './components/Bucles'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
         <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Ejercicios/>

      <Sintaxis/>
        
      <Comentario/>
        
      <Variables_tipodato/>

      <p id='num_var'><Numeros/><Strings/></p>
       
      <Booleanos/>
  
      <Operadores/>

      <Funciones/>

      <Objetos/>

      <Matrices/>

      <Methods_math/>

      <Comparacion/>

      <Condicionales/>

      <Bucles/>
  
    </div>
  )
} 
export default App