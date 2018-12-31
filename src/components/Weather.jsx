import React from 'react'
import { connect } from 'react-redux';

const Weather = (props) => {
    return (
      <div className="weather__info">
        {
          props.data.temperature && <p className="weather__key">Temprature: <span>{props.data.temperature}</span></p> 
        } 
        {
          props.data.city && props.data.country && <p className="weather__key">Location: 
          <span>{props.data.city}, {props.data.country}</span></p>
        } 
        {
          props.data.humidity && <p className="weather__key">Humidity: <span>{props.data.humidity}</span></p> 
        } 
        {
          props.data.description && <p className="weather__key">Description: <span>{props.data.description}</span></p>
        }  
      </div>
    )
  
}

const mapStateToProps = (state) => {
  return{
    data: state
  }
}
export default connect(mapStateToProps)(Weather)
