import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList"
import { Route } from "react-router-dom"
import Navigation from "./components/Navigation.js";
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <SearchForm />
      <Route exact path="/"> <WelcomePage /> </Route>
      <Route path="/CharacterList"> <CharacterList /> </Route>
    </main>
  );
}
