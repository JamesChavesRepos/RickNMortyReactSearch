import { useState, useEffect } from "react"; 
import { useFavorites } from "./context";
import getCharacters from "./api";
import CharacterCard from "./components/Character/CharacterCard";
import FavoriteSection from "./components/Favorites/FavoriteSection";
import './App.css'

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [favorites, dispatchFavorites] = useFavorites();
  const [search, setSearch] = useState("");

  

  const characterSearch = ()=>{
    getCharacters(search)
  }

  // TODO: Implement initial fetch from getCharacters
  
  useEffect(() => {
    setLoading(true);
    (async function fetchData() {
      const results = await getCharacters(search);
      setLoading(false);
      setData(results);
      console.log(results)
    })();
  }, [setData, setLoading, search]);
  return (
    <main className="App">

      {favorites.length > 0 ? <FavoriteSection props={data}/> : <intro/>}
      <input placeholder="Seacrh For More Characters to add to your list." type="text" name="search" className="search-input" onChange={(event) => setSearch(event.target.value)} />
      {loading && <div>🔎 Loading...</div>}

      <div className="card-container">
        {data?.results &&
          data.results.map((character) => (
            <CharacterCard props={character} />
          ))}
      </div>
    </main>
  );
}

export default App;
