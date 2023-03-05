import React from 'react'
import { useFavorites } from "../../context";
import './CharacterCard.css'

export default function CharacterCard({ props }) {

  console.log(props)
  let { id, name, status, species, image, location, gender, episode, type, created } = props
  console.log()
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
        <h2>{(name.length > 12) ? name.substring(0, 19) + ".." : name}</h2>
        <div>
          <img src={image} alt={name} />
          <h5 className={status === 'Alive' ? 'alive' : 'dead'}>{status === 'unknown' ? '' : status}</h5>
        </div>
        <span>
          Episode : {episode[0].split('/').pop()}
          <br />
          Specie : {type ? type : species}
          <br />
          Gender : {gender}
          <br />
          From : {location.name.split(' ')[0] === 'Earth' ? 'Earth' : location.name}
          <br />
          created : {created.split('T')[0]}
        </span>
        {
          favorites.includes(id) ?
            <button onClick={() => removeFavorite(props)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
              Remove
            </button>
            : <button onClick={() => addFavorite(props)}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
              Add
            </button>
        }
      </article>
    </div>
  )
}
