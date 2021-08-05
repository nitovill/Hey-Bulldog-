import React from "react";
import { getDogs, Paginar } from "../../../actions";
import { connect } from "react-redux";

function Ordenar({ getDogs, paginar }) {
  const traer_pesados = () => {
    paginar(0);
    getDogs("pesados");
  };
  const traer_livianos = () => {
    getDogs("livianos");
    paginar(0);
  };
  const traer_AZ = () => {
    getDogs("A-Z");
    paginar(0);
  };
  const traer_ZA = () => {
    getDogs("Z-A");
    paginar(0);
  };
  return (
    <>
      <button onClick={traer_pesados}>Pesados</button>
      <button onClick={traer_livianos}>Livianos</button>
      <button onClick={traer_AZ}>A-Z</button>
      <button onClick={traer_ZA}>Z-A</button>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    paginar: (num) => dispatch(Paginar(num)),
    getDogs: (orden) => dispatch(getDogs(orden)),
  };
}

export default connect(null, mapDispatchToProps)(Ordenar);
