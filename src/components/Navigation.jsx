import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../contex/pokemonContext";

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img src="src/assets/pokedex_logo.png" alt="Logo Pokedex" />
        </Link>
        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Buscar nombre de Pokemon"
            />
          </div>

          <button className="btn-search">Buscar</button>
        </form>
      </header>

      <Outlet />
    </>
  );
};
