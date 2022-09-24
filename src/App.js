import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class APP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj:{},
      show:false
    
    };
  }
  handleSubmit=(e)=>{
    e.preventDefault()
let q=e.target.name.value
let url=`http://localhost:3007/weather?q=${q}`
axios.get(url).then(ele=>{
 let data=ele.data
  this.setState({
    obj:data,
    show:true
  })
  console.log(data)
})
  }

  

  render() {
    return(
    <>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control id="name" type="text" placeholder="Enter cityname" />
       
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    {this.state.show&&
    <>
    <h3>The Weather is: {this.state.obj.weather}</h3>
    <h3>max temp for today: {this.state.obj.maxTemp}</h3>
    <h3>min temp for today: {this.state.obj.minTemp}</h3>
    </>}
    
    </>
    )
    
  }
}
export default APP;