import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let Navvy = styled.div`
  text-align: center;
`;

const Nav = () => {
  return (
    <Navvy>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/CharacterList">characters</Link>
      </div>
    </Navvy>
  );
};

export default Nav;
