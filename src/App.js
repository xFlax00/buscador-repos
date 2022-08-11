import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState()
  const [user, setUser] = useState()


  useEffect(() => {
    fetch(`https://api.github.com/users/xFlax00/repos`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  return (
    <div className="App">
      <section className="entradas">

        <div>
          <input id="usuario" placeholder="Digite o nome do usuário" onChange={(e) => setUser(e.target.value)}></input>
          <button id="buscar">Buscar</button>
        </div>

        <div id="filtro">
          <input placeholder="Digite o nome do repositório"></input>
          <button>Filtrar</button>
        </div>

      </section>

      <section>
      <ul className="repos">
          {users && (
            users.map((user) => {
              return <li>{user.name}</li>
            })
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;
