import React from "react";
import CharacterList from "./CharacterList"
import styled from "styled-components"

const ImgDiv = styled.div`
text-align: center
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site boiiiiiiiiiiiiiiiiiiiiiiii!</h1>
        <ImgDiv>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </ImgDiv>
      </header>
    </section>
  );
}


