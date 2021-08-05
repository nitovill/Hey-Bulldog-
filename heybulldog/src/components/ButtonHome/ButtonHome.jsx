import React from "react";
import "./inicial.css";
import { Link } from "react-router-dom";
import title from "../../assets/images/Imagen3.png";
import logo from "../../assets/images/Imagen1.png";

function Inicial() {
  return (
    <div>
      <div className="content">
        <img style={{ width: "40%" }} src={title} alt="" />
        <img style={{ width: "20%" }} src={logo} />
      </div>
      <div className="btnInicial">
        <Link to="/home">
          <button className="BTN1">ENTRAR!</button>
        </Link>
      </div>
    </div>
  );
}
export default Inicial;

/* <img src="./perro.jpg" id="imgen" alt="..." /> */
