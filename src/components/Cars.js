import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cars extends Component {
  

  render() {

       const cars = this.props.data;

       var carNode = cars.map((car)=> {
          return(<Link className="collection-item" to={"/cars/"+car.id}  key={car.id}>{car.name}</Link>)
       });

    return (
    <div>
    <h3 style={{color:'gray'}}>Cars:</h3>
      <div className="collection">
        
        {carNode}
      </div>
      </div>
    );
  }
}

export default Cars;
