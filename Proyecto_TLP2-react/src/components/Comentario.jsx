import '../App.css'
import React from 'react'

export default function Comentario() {
  return (
    <div>
      <h4>Comentario</h4>
      <p id='comentario'>//Esto es un comentario en una sola linea<br/>
        <p id='comentariomult'>/*Esto<br/>
              es<br/>
              un<br/> 
              comentario<br/>
              multilinea*/</p>
        </p>
    </div>
  )
}