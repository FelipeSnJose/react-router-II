import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import MyContext from "../context/MyContext";
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const { pokemonList } = useContext(MyContext);

  const [ pokemon, setPokemon ] = useState('Selecciona un Pokemón')

  const navigate = useNavigate()

  const handlerSubmit = (e) => {
    e.preventDefault();
    if( pokemon === 'Selecciona un Pokemón') return null
    navigate(`/pokedex/${pokemon}`)
  }

  return (
    <div className="pokedex-container">
      <h1>Selecciona un Pokemón</h1>
      <Form onSubmit={handlerSubmit} className="pokedex-form">
        <Form.Select
          className="pokemon-select"
          aria-label="Default select example"
          defaultValue={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
        >
          <option disabled>Selecciona un Pokemón</option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </Form.Select>
        <Button variant="primary" type="submit">
          Ver detalle
        </Button>
      </Form>
    </div>
  );
};

export default Pokedex;
