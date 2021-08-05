import React from "react";
import Temperamentos from "./Temperamentos";
import Creados from "./Creados";
import Ordenar from "./Ordenar";
import Todos from "./Todos";
import SearchBar from "./SearchBar";

const Filtros = () => {
  return (
    <>
      <Temperamentos />
      <Creados />
      <Ordenar />
      <Todos />
      <SearchBar />
    </>
  );
};

export default Filtros;
