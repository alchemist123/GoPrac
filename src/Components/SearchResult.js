import React, {Component}from 'react';
class SearchResult extends Component{
    constructor(props){
        super();
        this.state={
            id :"",
            date:""
        }

    }
    componentDidMount() {
        const id = localStorage.getItem('id');
        const date = localStorage.getItem('date');
        this.setState({ id, date });
      }
    render(){
        return(
            <div>
                {this.state.id}
            </div>
        );
    }
}   
export default SearchResult;