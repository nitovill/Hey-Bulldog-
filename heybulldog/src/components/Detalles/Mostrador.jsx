import React from 'react';
import './Detalles.css'
export default function Mostrador({name, id, image, reference_image_id, height, weight, life_span, temperaments}){
    var m = ""
    if (reference_image_id) {
      image= "https://cdn2.thedogapi.com/images/"+reference_image_id+".jpg"
    }
    if (height.metric) {
        height= height.metric
    }
    if (weight.metric) {
        weight= weight.metric
    }
    if(temperaments && temperaments[0].name){
        for (let i = 0; i < temperaments.length; i++) {
          if (i===0) {
            m = temperaments[0].name
          }else{
            m = m + ', '+temperaments[i].name
          }
        }
        temperaments = m
    }
    return (
        <div className="Mostrador"key={id} >
            <h3 className="titulo">{name}</h3> 
            <div className="card">
                <img className="imagen foto" src={image || "perdido.jpg"} alt="sin imagen"/>
            </div>
            <p>height: {height}</p>
            <p>weight: {weight}</p>
            <p>años de vida: {life_span}</p> 
            <p>temperamentos: {temperaments}</p>
        </div>)
};