import React from "react";
import { connect } from "react-redux";
import { getDogs, Paginar } from "../../../actions";

const Todos = ({ getDogs, paginar }) => {
  const traertodos = () => {
    getDogs();
    paginar(0);
  };
  return <button onClick={traertodos}>Todos</button>;
};

function mapDispatchToProps(dispatch) {
  return {
    getDogs: () => dispatch(getDogs()),
    paginar: (num) => dispatch(Paginar(num)),
  };
}

export default connect(null, mapDispatchToProps)(Todos);
