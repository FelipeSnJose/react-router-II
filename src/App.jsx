import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyContext from './context/MyContext'
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Pokedex from "./views/Pokedex";
import NotFound from "./views/NotFound";
import Pokemon from "./views/Pokemon";

const App = () => {
  const pokeApi = "https://pokeapi.co/api/v2/pokemon?limit=10000";

  const [pokemonList, setPokemonList] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error("Error al obtener datos desde la API:", error);
    }
  };

  useEffect(() => {
    getData(pokeApi);
  }, []);

  return (
    <MyContext.Provider value={{ pokemonList }} >
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:name" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
