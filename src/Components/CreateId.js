import React, {Component}from 'react';
import {InputGroup,FormControl,Button} from 'react-bootstrap';
import './App.css'
class CreateId extends Component{
    constructor(props){
        super();
        this.state={
            id :"",
            first_date:"",
            expi_date:"",
            status:""
        }

    }
    inputset=(e)=>{
      if(e.target.value>=6 && e.target.value<=100){
        this.setState({[e.target.name]:e.target.value,});
      }

    };
    makeid=(length)=> {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result.slice(0,6);
    
        
     }

      submit=()=>{
       const id=this.makeid(this.state.id);
       var a=Date();
       var first_date=a.toString();
       this.setState({ first_date });
       this.setState({ id });
       if(this.state.id!== "" &&this.state.first_date !== ""){
        alert("key :"+this.state.id+<br/>+
        "date:"+this.state.first_date)
      
       }
      }
    render(){
        return(
            <div>
                <br/>
            <InputGroup className="mb-3">
            <FormControl
              placeholder="enter a number to create id"
              aria-label="enter a number to create id"
              aria-describedby="basic-addon2"
              name="id" onChange={this.inputset}
            />
            <InputGroup.Append>
              <Button variant="outline-warning" onClick={this.submit}>Create Id</Button>
            </InputGroup.Append>
          </InputGroup>
          </div>
        );
    }
}
export default CreateId;