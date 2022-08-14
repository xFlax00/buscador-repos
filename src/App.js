import './App.css';
import { useState,useEffect } from 'react'
import List from './components/List/List'

function App() {

  const [users, setUsers] = useState()

  useEffect(() => {
      fetch(`https://api.github.com/users/xFlax00/repos`)
      .then(res => res.json())
      .then(data => setUsers(data))
      
    }, [])

  

  /* function search(event){
    event.preventDefault()
    users && (
      users.map((item) => {
        return setRepos([...repos, item.name])
      })
    )
  } */
  const [filt, setFilt] = useState()

  function filtred(){
    console.log(filt)
  }

  return (
    <div className="App">
      <section className="entradas">

        <div>
          <input id="usuario" placeholder="Digite o nome do usuário"></input>
          <button id="buscar">Buscar</button>
        </div>

        <div id="filtro">
          <input placeholder="Digite o nome do repositório" onChange={(e) => setFilt(e.target.value)}></input>
          <button onClick={filtred}>Filtrar</button>
        </div>
      
      </section>

      <List items={users}></List>
    </div>
  );
}

export default App;
