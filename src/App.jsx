//import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  var animal = {
    tipo: 'Dragão',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mario_the_Magnificent.jpg/1280px-Mario_the_Magnificent.jpg',
    imgAlt: 'Imagem de um dragão que realmente existe',
    desc: 'Dragões ou dragos são criaturas mitológicas presentes na mitologia de diversos povos, civilizações e culturas, com destaque para as tradições chinesa e europeia. Ainda existem nos dias de hoje!'
  }

  return (
    <>
      <div className="App">
        <h1>{animal.tipo}</h1>
        <img src={animal.img} alt={animal.imgalt} width="300"></img>
        <p>{animal.desc}</p>
        <button onClick={() => alert('Saiba mais sobre os dragões!')}>Saiba Mais</button>
      </div>
    </>
  )
}

export default App
