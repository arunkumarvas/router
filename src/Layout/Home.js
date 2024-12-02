import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state ={
      email:'',
      password:'',
      

    };
  }
   handleInputChange = (e) => {
    const {id,value} = e.target;
    this.setState(  { [id]:value } )

  }

  Submit = () => {
    const { email , password } = this.state;
    const preDefinedEmail = "arun@gmail.com";
    const preDefinePassword ='1234';
  if(email === preDefinedEmail || password === preDefinePassword ) {
    console.log(preDefinedEmail,preDefinePassword)
  

  
  }
  else {
    console.log('you enterd wrong value',email,password)

  }

  }
  


  render() {
   


  
    return (
       
    
      <div className='text-center'>
        <h1>Welcome to anna University</h1>
        <Form>
      <Form.Group className="mb-3"  >
        <Form.Label>Email address</Form.Label>
        <Form.Control id='email' onChange={this.handleInputChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control id='password' type="password" onChange={this.handleInputChange} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={this.Submit} >
        Submit
      </Button>
    </Form>
      </div>
    )
  }
}
export default Home;
