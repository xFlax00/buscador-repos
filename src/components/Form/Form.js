import { useEffect, useState } from 'react'

function Form({search, filtred, handleUsuario}){

    const [textUser, setTextUser] = useState("")
    const [text, setText] = useState()

    useEffect(() => {

      handleUsuario(textUser)

    }, [textUser])

    return(
        <section className="entradas">

        <div>
          <input id="usuario" placeholder="Digite o nome do usuário" onChange={(e) => setTextUser(e.target.value)} ></input>
          <button id="buscar" onClick={() => search(textUser)}>Buscar</button>
        </div>

        <div id="filtro">
          <input placeholder="Digite o nome do repositório" onChange={(e) => setText(e.target.value)}></input>
          <button onClick={() => {filtred(text)}}>Filtrar</button>
        </div>
      
      </section>
    )
}

export default Form