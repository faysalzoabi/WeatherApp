import React, { Component } from 'react';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
       
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-5 title-container">
                    <Titles/>
                </div>
                    
                <div className="col-md-7 form-container">
                    <Form/>
                    <Weather/>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
      </div>
    );
  }
}

export default App;
