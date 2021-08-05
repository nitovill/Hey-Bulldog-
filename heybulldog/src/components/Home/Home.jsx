import React, { useEffect } from "react";
import Buscador from "./Cards";
import Filtros from "./Filtros/Filtros";
import { gettemperaments, getDogs } from "../../actions";
import { connect } from "react-redux";

const Navbar = ({ getTemperaments, getDogs }) => {
  useEffect(() => {
    getTemperaments();
  }, []);
  useEffect(() => {
    getDogs();
  }, []);
  return (
    <>
      <Filtros />
      <a href="http://localhost:3000/crear">
        <button>Crear</button>
      </a>
      <hr />
      <Buscador />
    </>
  );
};

function mapStateToProps(state) {
  return {
    actual: state.actualpage,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTemperaments: () => dispatch(gettemperaments()),
    getDogs: () => dispatch(getDogs()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
