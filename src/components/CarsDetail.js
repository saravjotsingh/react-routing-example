import React, { Component } from 'react';

class CarDetail extends Component {
  render() {
    
    const cars = this.props.data;
    const id = this.props.match.params.id;

    const car = cars.filter(car=>{
    
    	if(car.id==id){
    		return car;
    	}
    })

    console.log(car);
    return (
        		   	
			<div className="row">
    			<div className="col s12 m7 cc">
      	<div className="card">
        <div className="card-image">
          <img src={car[0].media}/>
          <span className="card-title">{car[0].name}</span>
        </div>
        <div className="card-content">
          <p>Year:{car[0].year}</p>
          <p>Model:{car[0].model}</p>
          <p>Make:{car[0].make}</p>
          <p>price:{car[0].price}</p>
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default CarDetail;
