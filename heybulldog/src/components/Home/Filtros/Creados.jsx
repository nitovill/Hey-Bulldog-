import React from "react";
import { getdbdogs, Paginar } from "../../../actions";
import { connect } from "react-redux";

function Creados({ getDogsDB, paginar }) {
  const traerDB = () => {
    paginar(0);
    getDogsDB();
  };
  return <button onClick={() => traerDB()}>Creados</button>;
}

function mapDispatchToProps(dispatch) {
  return {
    getDogsDB: () => dispatch(getdbdogs()),
    paginar: (num) => dispatch(Paginar(num)),
  };
}

export default connect(null, mapDispatchToProps)(Creados);
