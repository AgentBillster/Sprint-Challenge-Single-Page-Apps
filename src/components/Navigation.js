import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components"

const NavDiv = styled.div`
text-align:center

`;


const Navigation = () => {
  return (
      <NavDiv>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/CharacterList">characters</Link>
        </div>
      </NavDiv>
  );
};

export default Navigation;