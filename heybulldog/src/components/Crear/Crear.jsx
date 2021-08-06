import React, { useState, useEffect } from "react";
import axios from "axios";
import { gettemperaments } from "../../actions";
import { connect } from "react-redux";
import "./Crear.css";
import homeimg from "../../assets/images/Imagen22.png";
import Card from "../Home/Card";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Crear(props) {
  const [dog, setDog] = useState({
    name: "",
    temperaments: [],
    weight: "",
    height: "",
    image: "",
    life_span: "",
  });
  const [dogcreado, setDogcreado] = useState({});
  useEffect(() => {
    props.getTemperaments();
  }, []);
  const onInputChange = (e) => {
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newDog = {
      name: dog.name,
      temperaments: dog.temperaments,
      weight: dog.weight,
      height: dog.height,
      image: dog.image,
      life_span: dog.life_span,
    };
    console.log(newDog);
    axios.post("http://localhost:3001/dogs", newDog).then((res) => {
      Swal.fire({
        title: "Saved!",
        text: "Your breed of dog was accepted!",
        icon: "success",
        background: "white",
        confirmButtonColor: "#06141c",
        iconColor: "#06141c",
      });
      setDogcreado(res.data);
      setDog({
        name: "",
        temperaments: [],
        weight: "",
        height: "",
        image: "",
        life_span: "",
      });
    });
  };
  const setTemperament = (e) => {
    if (e.target.value !== "seleccionar...") {
      dog.temperaments.push(e.target.value);
      console.log(e.target.value);
    } else {
      console.log(e.target.value);
    }
  };
  return (
    <div>
      <div style={{ borderStyle: "ridge" }}>
        <Link to="/home">
          <img style={{ width: "25%" }} src={homeimg} alt="" />
        </Link>
      </div>
      <div style={{ padding: "20px" }}>
        <select className="temp" name="temperaments" onChange={setTemperament}>
          <option selected disabled>
            Temperaments...
          </option>
          {props.temperaments.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <input
          className="botones"
          type="text"
          placeholder="Name"
          name="name"
          required
          value={dog.name}
          onChange={onInputChange}
        />
        <input
          type="text"
          className="botones"
          placeholder="Weight"
          name="weight"
          value={dog.weight}
          onChange={onInputChange}
          required
        ></input>
        <input
          type="height"
          className="botones"
          placeholder="Height"
          name="height"
          value={dog.height}
          onChange={onInputChange}
          required
        ></input>
        <input
          type="text"
          className="botones"
          placeholder="Years of life..."
          name="life_span"
          value={dog.life_span}
          onChange={onInputChange}
          required
        ></input>
        <input
          type="text"
          className="botones"
          placeholder="Image"
          name="image"
          value={dog.image}
          onChange={onInputChange}
          required
        ></input>
      </div>

      <form onSubmit={onSubmit}>
        <button className="botones" type="submit">
          Save
        </button>
      </form>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "aliceblue",
        }}
      >
        <Card
          name={dog.name}
          id={dog.id}
          image={dog.image}
          reference_image_id={dog.reference_image_id}
          temperaments={dog.temperaments}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    temperaments: state.temperaments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemperaments: () => dispatch(gettemperaments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crear);

/* 
  render() {
      {
	"weight": "2",
	"height": "4",
	"image": "https://i.pinimg.com/originals/af/dd/3f/afdd3f8880e046dbee3043477feb32e1.jpg"
}
    return (
          <div className="form-group">
            <textarea
            type="text"
            className="form-control"
            placeholder="Descripción"
            name="content"
            onChange={this.onInputChange}
            required>
            </textarea>
          </div>

          <div className="form-group">
            <DatePicker
            className="form-control"
            selected={this.state.date}
            onChange={this.onChangeDate}
            />
          </div>

          <form onSubmit={this.onSubmit}>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }

}

export default CreateNote; */
