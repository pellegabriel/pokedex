import "./App.css";
import React, { useState } from "react";
import axios from "axios";
function App() {
  const { pokemon, setPokemon } = useState("pikachu");
  const { pokemonData, setPokemonData } = useState([]);
  const { pokemonType, setPokemonType } = useState("");

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);

      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Enter Pokemon Name"
          />
        </label>
      </form>
      {pokemonData ??
        pokemonData.map((data) => {
          return (
            <div className="container">
              <img alt="" />
              <div className="divTable">
                <div className="divTableBody"></div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {""}
                    {Math.round(data.height * 3.9)}
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{pokemonType}</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
