import React from 'react'

export default function Objetos() {
    return (
      <div id="functions1" style={{backgroundColor:'#00a6ff'}}>
      <h4>Clases y objetos</h4>
      <div style={{backgroundColor:'#00a6ff'}}>
        <pre className="language-javascript" class="codigo">
          {`class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  const persona = new Persona('Juan',96)`
}
        </pre>
      </div>
   </div>
      )
    }
