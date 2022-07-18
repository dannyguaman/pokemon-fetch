
import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [pokeList, setPokeList] = useState([]);

  const clickHandler = (e) => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => {
      return response.json();
      }).then(response => {
          console.log(response.results);
          setPokeList(response.results);
      }).catch(err=>{
          console.log(err);
      })

  };

  return (
    <div>
      <button onClick={clickHandler}>Fetch Pokemon</button>
      <ul className="App">
      {
        pokeList.map((item, idx) =>{
          return <li key={idx}>
            {(item.name)}</li>
        })
      }
      
      </ul>
    </div>
  );
}

export default App;
