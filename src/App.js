import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [chiste, setChiste] = useState('')
  const options = {
    method: 'GET',
    headers: {
      accept: 'XXXXXXXXXXXXXXXXXXXXX'
    }
  };

  const cambiar = () =>{
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
    .then(response => response.json())
    .then(response => setChiste(response.value))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    cambiar()
  },[]);

  return (
    <div className="App">
      {chiste}
      <button onClick={cambiar}>Jokes</button>
    </div>
  );
}
export default App;
