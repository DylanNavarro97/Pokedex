import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { CardPokemon } from '../components'
import { PokemonContext } from '../context/PokemonContext'

export const SearchPage = () => {

  const {globalPokemons} = useContext(PokemonContext)
  const location = useLocation()

  const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()))



  
  
  return (
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>
      <div className="card-list-pokemon container">
        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  )
}
