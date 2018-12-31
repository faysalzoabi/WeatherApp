import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchdata} from '../store/actions'
export class Form extends Component {
  
  state = {
      city:'',
      country:''
  }
  
  handleClick = (e) => {
    e.preventDefault();
    console.log('instate', this.state.city, this.state.country)
    if(this.state.city && this.state.country){
        this.props.dispatch(fetchdata(this.state.city, this.state.country))
    }
    
  }

  handleChange = (e) => {
      this.setState({[e.target.name] : e.target.value  });
  }
  
   render() {
    return (
        <div class="container">
            <form onSubmit={this.handleClick}>
                <div class="form-group">
                    <label for="exampleInputEmail1">City</label>
                    <input onChange={this.handleChange} type="text" name="city" class="form-control" placeholder="City..."/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Country</label>
                    <input onChange={this.handleChange} type="text" name="country" class="form-control" placeholder="Country..."/>
                </div>
                <button class="btn btn-primary">Submit</button>
            </form>
      </div>    
    )
  }
}

export default connect()(Form)
