import React from 'react'

export default function Variables() {
  return (
    <div>
      <h5>Variables y tipos de datos</h5>
      <ol id='var_tip' start={1} type="1">
        <li>Numericas (Number): let = 5</li>
        <li>Cadenas de texto (String): let frase = 'HolaMundo'</li>
        <li>Boolenanas (bool): let MayorQue = true/false</li>  
        <li>Array: let numeros = [1,2,3,4,5]</li>
        <li>Indefinidas (undefined): let datoUndefined</li>
      </ol>
    </div>
  )
}
