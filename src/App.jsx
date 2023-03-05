import { useState, useEffect } from "react";
import { useFavorites } from "./context";
import getCharacters from "./api";
import CharacterCard from "./components/Character/CharacterCard";
import FavoriteSection from "./components/Favorites/FavoriteSection";
import './App.css'
import Intro from "./components/intro/Intro";

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
      <Intro />
      {favorites.length > 0 ? <FavoriteSection props={data} /> : ''}
      <input placeholder="Type a name...." type="text" name="search" className="search-input" onChange={(event) => setSearch(event.target.value)} />
      {loading && <svg className="loader" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.6566 12H21M3 12H6.34315M12 6.34342L12 3M12 21L12 17.6569" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8.00025L18.3642 5.63611M5.63629 18.364L8.00025 16M8.00022 8.00025L5.63608 5.63611M18.364 18.364L16 16" stroke="#0095FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>}

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
