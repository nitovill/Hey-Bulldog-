import React from "react";
import { getdogsbyname } from "../actions";
import { connect } from "react-redux";

function NavBar(props) {
  return (
    <div>
      <div>
        <button type="button" onClick={props.getDogsDB}>
          Base de Datos
        </button>
        <button type="button">Todos</button>
      </div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    getDogsDB: (name) => dispatch(getdogsbyname()),
  };
}

export default connect(null, mapDispatchToProps)(NavBar);
