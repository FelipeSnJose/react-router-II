import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom"

const Pokemon = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState()

    const getData = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          console.error("Error al obtener datos desde la API:", error);
        }
      };

      useEffect(() => {
        getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
      }, [name]);

      if (!pokemon) {
        return <div>Loading...</div>;
      }

      const { stats, types } = pokemon;

      return (
        <div className="pokemon-card-container">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pokemon.sprites.front_default} />
            <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Type: {types[0].type.name}</Card.Subtitle>
              <ListGroup>
                <ListGroup.Item>HP: {stats[0].base_stat}</ListGroup.Item>
                <ListGroup.Item>Attack: {stats[1].base_stat}</ListGroup.Item>
                <ListGroup.Item>Special Attack: {stats[3].base_stat}</ListGroup.Item>
                <ListGroup.Item>Defense: {stats[2].base_stat}</ListGroup.Item>
                <ListGroup.Item>Special Defense: {stats[4].base_stat}</ListGroup.Item>
                <ListGroup.Item>Speed: {stats[5].base_stat}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      );
    };

    export default Pokemon;