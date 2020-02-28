import React from "react";
import Header from "./components/Header.js";
import Nav from "./components/nav.js";
import { Route } from "react-router-dom"
import WelcomePage from './components/WelcomePage'
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/"> <WelcomePage /> </Route>
      <Route path="/CharacterList"> <CharacterList /> </Route>
    </main>
  );
}
