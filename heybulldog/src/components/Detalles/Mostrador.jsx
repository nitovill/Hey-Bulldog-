import React from "react";
import { Link } from "react-router-dom";
import "./Detalles.css";
import homeimg from "../../assets/images/Imagen22.png";
export default function Mostrador({
  name,
  id,
  image,
  reference_image_id,
  height,
  weight,
  life_span,
  temperaments,
}) {
  var m = "";
  if (reference_image_id) {
    image = "https://cdn2.thedogapi.com/images/" + reference_image_id + ".jpg";
  }
  if (height.metric) {
    height = height.metric;
  }
  if (weight.metric) {
    weight = weight.metric;
  }
  if (temperaments && temperaments[0].name) {
    for (let i = 0; i < temperaments.length; i++) {
      if (i === 0) {
        m = temperaments[0].name;
      } else {
        m = m + ", " + temperaments[i].name;
      }
    }
    temperaments = m;
  }
  return (
    <div className="Mostrador" key={id}>
      <div style={{ borderStyle: "ridge" }}>
        <Link to="/home">
          <img style={{ width: "25%" }} src={homeimg} alt="" />
        </Link>
      </div>
      <div style={{ padding: "25px" }}>
        <h3 className="titulo">{name}</h3>{" "}
      </div>

      <div
        style={{ height: "350px", paddingBottom: "15px", background: "none" }}
        className="card"
      >
        <img
          style={{ borderRadius: "25px" }}
          className="imagen foto"
          src={image || "perdido.jpg"}
          alt="sin imagen"
        />
      </div>
      <div style={{ paddingTop: "15px" }}>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        <p>Years of life : {life_span}</p>
        <p>Temperaments: {temperaments}</p>
      </div>
    </div>
  );
}
