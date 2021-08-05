import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { gettemperaments } from "../../actions";
import { connect } from "react-redux";
import './Crear.css'
import Card from '../Home/Card';
function Crear (props) {
    const [ dog, setDog ] = useState({
        name: "",
        temperaments: [],
        weight: "",
        height: "",
        image: "",
        life_span: ""
    })
    const [ dogcreado, setDogcreado ] = useState({})
    useEffect(()=>{
        props.getTemperaments()
    },[])
    const onInputChange = (e => {
        setDog({
            ...dog,
          [e.target.name]: e.target.value
        })
    })
    const onSubmit = (e) => {
        e.preventDefault();
        const newDog = {
          name: dog.name,
          temperaments: dog.temperaments,
          weight: dog.weight,
          height: dog.height,
          image: dog.image,
          life_span: dog.life_span
        }
        console.log(newDog);
        axios.post('http://localhost:3001/dogs', newDog)
        .then((res)=>{
          setDogcreado(res.data);
          setDog({
            name: "",
            temperaments: [],
            weight: "",
            height: "",
            image: "",
            life_span: ""
          })
        })
    }
    const setTemperament = (e)=>{
      if(e.target.value !== "seleccionar..."){
        dog.temperaments.push(e.target.value)
        console.log(e.target.value);
      }else{
        console.log(e.target.value);
      }
    }
    return(
        <div>
            <h2>Perro</h2>
            <select name="temperaments" onChange={setTemperament}>
              <option>
                seleccionar...
              </option>
            {
                props.temperaments.map(t=>
                    <option key={t.id} value={t.id}>
                    {t.name}
                    </option>
                )
            }
            </select>
            <input
            type="text"
            placeholder="Nombre"
            name="name"
            required
            value={dog.name}
            onChange={onInputChange}
            />
           <input
            type="text"
            placeholder="weight"
            name="weight"
            value={dog.weight}
            onChange={onInputChange}
            required>
            </input>
            <input
            type="height"
            placeholder="height"
            name="height"
            value={dog.height}
            onChange={onInputChange}
            required>
            </input>
            <input
            type="text"
            placeholder="años de vida..."
            name="life_span"
            value={dog.life_span}
            onChange={onInputChange}
            required>
            </input>
            <input
            type="text"
            placeholder="image"
            name="image"
            value={dog.image}
            onChange={onInputChange}
            required>
            </input>
            <form onSubmit={onSubmit}>
                <button type="submit">
                Guardar
                </button>
            </form>
            <a href="http://localhost:3000/home">
              <button>Home</button>
            </a>
            <h4 className="lista">Temperamentos</h4>
            <div>
              {
                dog.temperaments && dog.temperaments.map((t)=>
                <p>{t}</p>
                )
              }
            </div>
            <Card 
              name= {dogcreado.name}
              id= {dogcreado.id}
              image= {dogcreado.image}
              reference_image_id= {dogcreado.reference_image_id}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        temperaments: state.temperaments
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        getTemperaments: () => dispatch(gettemperaments())
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Crear);

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