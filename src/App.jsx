import { useState } from "react";
import { useFavorites } from "./context";
import getCharacters from "./api";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [favorites, dispatchFavorites] = useFavorites();
  const [search, setSearch] = useState("");

  // TODO: Implement search with getCharacters

  // TODO: Implement initial fetch from getCharacters

  return (
    <div className="App">
      {/* TODO: Implement search */}
      <input type="text" name="search" className="search-input" />

      {/* TODO: Style list and container */}
      {loading && <div>Loading...</div>}
      <div>
        {data?.results &&
          data.results.map((character) => (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              {/* TODO: Implement add/remove favorites */}
              <button>Add to favorites</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
