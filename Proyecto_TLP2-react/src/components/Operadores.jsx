import React from 'react'

export default function Operadores() {
  return (
    <div>
      <p id='operadores'>Operadores</p>
      <p id='OperaRit'>Operadores aritmeticos</p>
      <ul id='operarit'>
        <li>Suma (+)</li>
        <li>Resta (-)</li>
        <li>Multiplicacion (*)</li>
        <li>Division (/)</li>
        <li>Modulo (%)</li>
        </ul>
      <p id='operadoresasi'>Operadores de asignación</p>
      <ul id='operasig'>
        <li>Asignación simple (=)</li>
        <li>Asignación con Operadores aritmeticos (+=, -=, *=, /=)</li>
        </ul>
      <p id='operacmp'>Operadores de comparacion</p>
      <ul id='opercomp'>
        <li>Igualdad (==)</li>
        <li>Desigualdad (!=)</li>
        <li>Igualdad estricta (===)</li>
        <li>Desigualdad estricta (!==)</li>
        <li>Mayor y mayor o igual que</li>
        <li>Menor y menor o igual que</li>
      </ul>
    </div>
  )
}
