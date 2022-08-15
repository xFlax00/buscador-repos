import './App.css';
import { useState, useEffect } from 'react'
import Form from './components/Form/Form'
import List from './components/List/List'

function App() {

  const [users, setUsers] = useState()
  const [repos, setRepos] = useState()

  useEffect(() => {
      fetch(`https://api.github.com/users/xFlax00/repos`)
      .then(res => res.json())
      .then(data => setUsers(data)) 
    }, [])

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

      <Form search={search} filtred={filtred}></Form>
      <List items={repos}></List>

    </div>
  );
}

export default App;
