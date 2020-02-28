import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components"

const Search = styled.div`
text-align: center;
`

const Grid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log(response.data.results);
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setData(characters);
    });
  }, [search]);

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div classname="yuuuuup">
    <Search>
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={search}
          placeholder="search here"
        />
      </form>
      </Search>
      


      <Grid>
      {data.map(character => {
        return (
          <CharacterCard
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            gender={character.gender}
          />
        );
      })}
      </Grid>
      </div>
      


  );
}
