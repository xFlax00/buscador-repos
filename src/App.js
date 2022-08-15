import './App.css';
import { useState,useEffect } from 'react'
import List from './components/List/List'

function App() {

  const [users, setUsers] = useState()
  const [repos, setRepos] = useState()

  useEffect(() => {
      fetch(`https://api.github.com/users/xFlax00/repos`)
      .then(res => res.json())
      .then(data => setUsers(data)) 
    }, [])

  const [text, setText] = useState()

  function search(){
    setRepos(users)
  }

  function filtred(tx){
    console.log(tx)
    let filteredRepos = users.filter((item) => {
      return item.name.includes(tx)
    })

    setRepos(filteredRepos)

    console.log(users)
  }

  return (
    <div className="App">
      <section className="entradas">

        <div>
          <input id="usuario" placeholder="Digite o nome do usuário"></input>
          <button id="buscar" onClick={() => {search()}}>Buscar</button>
        </div>

        <div id="filtro">
          <input placeholder="Digite o nome do repositório" onChange={(e) => setText(e.target.value)}></input>
          <button onClick={() => {filtred(text)}}>Filtrar</button>
        </div>
      
      </section>

      <List items={repos}></List>
    </div>
  );
}

export default App;
