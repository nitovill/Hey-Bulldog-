import React from "react";
import Temperamentos from "./Temperamentos";
import Creados from "./Creados";
import Ordenar from "./Ordenar";
import Todos from "./Todos";
import SearchBar from "./SearchBar";
import imgtop from "../../../assets/images/Imagen22.png";

const Filtros = () => {
  return (
    <div className="Filters">
      <div className="divImg">
        <img src={imgtop} alt="" />
      </div>
      <div>
        <div className="divSB">
          <SearchBar />
        </div>
        <h5 style={{ color: "white" }}>Filters and sorting </h5>
        <div style={{ display: "flex" }}>
          <div
            style={{
              paddingRight: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Temperamentos />
          </div>
          <Todos />
          <Creados />
          <Ordenar />
        </div>
      </div>
    </div>
  );
};

export default Filtros;
