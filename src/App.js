import './App.css';
import { useState } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {

  const [repos, setRepos] = useState()

  let recovery

  function search(text){
    fetch(`https://api.github.com/users/${text}/repos`)
    .then(res => res.json())
    .then(data => {data.message!=="Not Found" ? setRepos(data): console.log("Not Found")})

  }

  function filtred(tx){

    recovery = repos
    console.log(repos)
    console.log(recovery)

    console.log(tx)

    let filteredRepos

    if(repos){
      filteredRepos = repos.filter((item) => {
        return item.name.includes(tx)
      })
    }
    
    setRepos(filteredRepos)
  }

  return (
    <div className="App">

    <main className="box-content">
      <h1 className='title'>Buscar Repositório</h1>

      <Form search={search} filtred={filtred}></Form>
      <List items={repos} recovery={recovery}></List>
    </main>
      

    </div>
  );
}

export default App;
