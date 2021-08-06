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
      <button onClick={traer_pesados} className="botones">
        Heavy
      </button>
      <button onClick={traer_livianos} className="botones">
        Light
      </button>
      <button onClick={traer_AZ} className="botones">
        A-Z
      </button>
      <button onClick={traer_ZA} className="botones">
        Z-A
      </button>
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
