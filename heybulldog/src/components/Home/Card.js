import React from "react";
import "./Card.css";

function Card({ name, id, image, reference_image_id, temperaments }) {
  var m = "";
  if (reference_image_id) {
    image = "https://cdn2.thedogapi.com/images/" + reference_image_id + ".jpg";
  }
  if (temperaments && temperaments[0] && temperaments[0].name) {
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
    <div className="cardDog" key={id}>
      <div className="cardImg">
        <img
          className="cardImagen"
          src={image || "perdido.jpg"}
          alt="sin foto"
        />
      </div>
      <div className="detalles">
        <h4 className="titulo">{name}</h4>
        <p className="temperaments">{temperaments}</p>
      </div>
      <a href={"http://localhost:3000/home/" + id}>Detalles</a>
    </div>
  );
}
/* 
    "DB": true,
    "createdAt": "2021-06-07T17:48:09.789Z",       

    "updatedAt": "2021-06-07T17:48:09.789Z",
    "temperaments */
export default Card;
