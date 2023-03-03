import React from 'react'
import { useFavorites } from "../../context";
import CharacterCard from '../Character/CharacterCard';
import './FavoriteSection.css'

export default function FavoriteSection({ props }) {
  console.log(props.results)
  const [favorites, dispatchFavorites] = useFavorites();
  let favList = favorites.map(id => {
    return props.results.find(character => character.id === id)
  })
  console.log(favList)
  return (<>
    <h1>Favorite Character List </h1>
    <section className='fav-section'>
      {favList.map(character => (
        <CharacterCard props={character} />
      ))}
    </section>
  </>
  )
}
