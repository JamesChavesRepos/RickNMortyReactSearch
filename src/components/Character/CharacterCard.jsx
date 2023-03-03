import React from 'react'
import { useFavorites } from "../../context";
import './CharacterCard.css'

export default function CharacterCard({ props }) {

  let { id, name, status, species, created, image, location, origin } = props
  const [favorites, dispatchFavorites] = useFavorites();
  const addFavorite = (character) => {
    dispatchFavorites({
      type: 'ADD_FAVORITE',
      payload: character
    })
  };

  const removeFavorite = (character) => {
    dispatchFavorites({
      type: 'REMOVE_FAVORITE',
      payload: character
    });
  };

  return (
    <div className='shadow'>
      <article key={id} className='character-card'>
        <h2>{(name.length > 12)  ? name.substring(0, 19) + ".." : name}</h2>
        <div>
          <img src={image} alt={name} />
          <h5 className={status === 'Alive' ? 'alive' : 'dead'}>{status === 'unknown' ? '' : status}</h5>
        </div>
        <span>
          Specie : {species} 
          <br />
          From : {location.name}
          </span>
        {
          favorites.includes(id) ?
            <button onClick={() => removeFavorite(props)}>Remove </button>
            : <button onClick={() => addFavorite(props)}>Add </button>
        }
      </article>
    </div>
  )
}
