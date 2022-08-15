import { useState } from 'react'

function Form(props){

    const [text, setText] = useState()

    return(
        <section className="entradas">

        <div>
          <input id="usuario" placeholder="Digite o nome do usuário"></input>
          <button id="buscar" onClick={() => {props.search()}}>Buscar</button>
        </div>

        <div id="filtro">
          <input placeholder="Digite o nome do repositório" onChange={(e) => setText(e.target.value)}></input>
          <button onClick={() => {props.filtred(text)}}>Filtrar</button>
        </div>
      
      </section>
    )
}

export default Form