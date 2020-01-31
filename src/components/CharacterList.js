import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
const [character, setCharacter] = useState([])

  useEffect(() => {
    axios
     .get("https://rickandmortyapi.com/api/character/")
     .then(response => {
      console.log(response.data.results)
       setCharacter(response.data.results);
     })

}, []);


  return (
    
    <div className="grid-view">
    {character.map(characters => {
      return (
      <CharacterCard
        id={characters.id}
        name={characters.name}
        status={characters.status}
        species={characters.species}
        image={characters.image}
        gender={characters.gender}
      />
      )
    })}
  </div>
  )}

    


  
  
