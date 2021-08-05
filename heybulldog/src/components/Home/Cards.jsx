import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { Paginar } from "../../actions";

import "./Cards.css";

function Cards({ dogs, actual, paginar }) {
  const Dogs = dogs.slice(actual, actual + 8);
  const volver = () => {
    if (actual !== 0) {
      paginar(actual - 8);
    }
  };
  const aumentar = () => {
    if (Dogs.length === 8) {
      paginar(actual + 8);
    }
  };
  return (
    <>
      <button onClick={volver}>Ant</button>
      <button onClick={aumentar}>Sig</button>
      <div className="cards">
        {Dogs &&
          Dogs.map((dog) => {
            return (
              <Card
                key={dog.id}
                name={dog.name}
                id={dog.id}
                image={dog.image}
                reference_image_id={dog.reference_image_id}
                temperaments={dog.temperament}
              />
            );
          })}
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    actual: state.actualpage,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    paginar: (num) => dispatch(Paginar(num)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);
