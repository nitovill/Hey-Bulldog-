import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getbytemperaments, getDogs, Paginar } from "../../../actions";

const Temperamentos = ({
  getDogs,
  getDogTemperament,
  temperaments,
  paginar,
}) => {
  const [temperamentos, setTemperamentos] = useState([]);
  useEffect(() => {
    setTemperamentos(temperaments);
  }, [temperaments]);
  const filtrar = (e) => {
    if (e.target.value === "Temperamento...") {
      getDogs();
      paginar(0);
    } else {
      getDogTemperament(e.target.value);
      paginar(0);
    }
  };
  return (
    <select name="select" onChange={(e) => filtrar(e)}>
      <option>Temperaments...</option>
      {temperamentos.map((t) => (
        <option key={t.id} value={t.name}>
          {t.name}
        </option>
      ))}
    </select>
  );
};
function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDogTemperament: (n) => dispatch(getbytemperaments(n)),
    getDogs: () => dispatch(getDogs()),
    paginar: (num) => dispatch(Paginar(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Temperamentos);
