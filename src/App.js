import { useState } from 'react';
import Card from './Card';
import Pokeball from './Pokeball';
import PokeballHeader from './PokeballHeader';
import './App.css';
import styled from 'styled-components/macro';

function App() {
  const initialPokemon = [
    { name: 'Pikachu', type: 'Elektro' },
    { name: 'Glumanda', type: 'Feuer' },
    { name: 'Bisasam', type: 'Pflanze' },
    { name: 'Schiggy', type: 'Wasser' },
    { name: 'Smettbo', type: 'Käfer' },
    { name: 'Smettbo', type: 'Elektro' },
    { name: 'Vulpix', type: 'Feuer' },
    { name: 'Pummeluff', type: 'Fee' },
  ];

  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokedex, setPokedex] = useState([]);

  function placeIntoPokedex(name) {
    const pokemonToAdd = pokemon.find((pokemon) => pokemon.name === name);
    setPokedex([pokemonToAdd, ...pokedex]);
    removePokemon(name);
  }

  function removePokemon(name) {
    const updatedPokemons = pokemon.filter((pokemon) => pokemon.name !== name);
    setPokemon([...updatedPokemons]);
  }

  function setFree(name) {
    const pokemonsToKeep = pokedex.filter((pokemon) => pokemon.name !== name);
    setPokedex([...pokemonsToKeep]);
    const pokemonToAdd = pokedex.find((pokemon) => pokemon.name === name);
    setPokemon([...pokemon, pokemonToAdd]);
  }
  return (
    <div>
      <Headline>Pokemon App</Headline>
      <section>
        <PokeballHeader count={pokedex.length} />
        <div className="flexbox">
          {pokedex.map((pokemon) => (
            <Pokeball
              name={pokemon.name}
              type={pokemon.type}
              onSetFree={setFree}
            />
          ))}
        </div>
      </section>
      {pokemon.map((pokemon) => (
        <Card
          name={pokemon.name}
          type={pokemon.type}
          onPlaceIntoPokedex={placeIntoPokedex}
        />
      ))}
    </div>
  );
}

export default App;

const Headline = styled.h1`
  color: hotpink;
`;
