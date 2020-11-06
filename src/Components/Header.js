import React, {Component}from 'react';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import logo from './logo.png'
class Header extends Component{
    constructor(props){
        super();
        this.state={
            id :"",
            date:""
        }

    }
    inputset=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    };
    handleFormSubmit = () => {
        const { id, date } = this.state;
        localStorage.setItem('id', id);
        localStorage.setItem('date',date);
      };
    render(){
        return(<div>
       <Navbar bg="light" expand="lg">
  <Navbar.Brand ><img src={logo} width="150" height="60" alt="GoPrac"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Form inline>
      <FormControl type="text" name="id" placeholder="Id" className="mr-sm-2" onChange={this.inputset} />
      <FormControl type="text" name="date" placeholder="date" className="mr-sm-2" />
      <Button variant="outline-warning" onClick={this.handleFormSubmit}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
        );
    }

}
export default Header;