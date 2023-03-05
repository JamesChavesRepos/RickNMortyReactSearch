import { useState, useEffect } from "react";
import { useFavorites } from "./context";
import getCharacters from "./api";
import CharacterCard from "./components/Character/CharacterCard";
import FavoriteSection from "./components/Favorites/FavoriteSection";
import './App.css'
import Intro from "./components/intro/Intro";
import searchIcon from './assets/search.svg'

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [favorites] = useFavorites();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    (async function fetchData() {
      const results = await getCharacters(search);
      setLoading(false);
      setData(results);
    })();
  }, [search]);

  return (
    <main className="App">
      {favorites.length > 0 ? <FavoriteSection props={data} /> : <Intro />}
      <input placeholder="Type a name...." type="text" name="search" className="search-input" onChange={(event) => setSearch(event.target.value)} />
      {loading && <div> <img src={searchIcon}/> Loading...</div>}

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
