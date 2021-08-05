import React, {useEffect} from 'react';
import Mostrador from './Mostrador'
import { getdogbyid } from "../../actions";
import { connect } from 'react-redux'

function Detalles(props){
    useEffect(()=>{
        props.getDogsbyId(props.perro)
    },[])
    return (
        <div>
            {
                props.dogs && props.dogs.map((dog) => (
                    <Mostrador 
                    name= {dog.name}
                    id= {dog.id}
                    image= {dog.image}
                    reference_image_id= {dog.reference_image_id}
                    height= {dog.height}
                    weight= {dog.weight}
                    life_span= {dog.life_span}
                    temperaments= {dog.temperament}
                    />
                ))
            }
        </div>
    )
};

function mapStateToProps(state) {
    return {
        dogs: state.dogs
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        getDogsbyId: id => dispatch(getdogbyid(id))
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detalles);