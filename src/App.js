import './App.css';
import { useState, useEffect } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {

  const [users, setUsers] = useState()
  const [repos, setRepos] = useState()

  const [usuario, setUsuario] = useState("xFlax00")
  const handleUsuario = (text) => {
    console.log(text)
    setUsuario(text)
    console.log("user: " + usuario)
    
  }


  useEffect(() => {
      fetch(`https://api.github.com/users/${usuario}/repos`)
      .then(res => res.json())
      .then(data => setUsers(data)) 
    }, [usuario])

  function search(usu){
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

      <h1 className='title'>Buscar Repositório</h1>

      <Form search={search} filtred={filtred} handleUsuario={handleUsuario}></Form>
      <List items={repos}></List>

    </div>
  );
}

export default App;
