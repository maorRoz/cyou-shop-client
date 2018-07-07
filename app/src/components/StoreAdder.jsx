import React, { Component } from 'react';
import {Form} from 'semantic-ui-react'

class StoreAdder extends Component {
    constructor(props){
        super(props);
        this.state ={name: '',address: '',openingHours: '',managerName: ''};
        this.handleOnChange= this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOnChange(event){
        switch(event.target.name){
          case "name" : this.setState({ name: event.target.value }); break;
          case "address" : this.setState({address: event.target.value}); break;
          case "openingHours" : this.setState({openingHours : event.target.value}); break;
          default: this.setState({managerName : event.target.value}); 
        }
    }

    handleSubmit(){
        this.props.adder(this.state);
    }
    render() {
      return ( 
        <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Store Name:' name='name' value={this.state.name} placeholder='Store Name' 
                onChange={this.handleOnChange}/>
                <Form.Input fluid label='Address:' name='address' value={this.state.address} placeholder='Address'
                 onChange={this.handleOnChange}/>
                <Form.Input fluid label='Opening Hours:' name='openingHours' value={this.state.openingHours}
                 placeholder='Opening Hours' onChange={this.handleOnChange}/>
                <Form.Input fluid label='Manager Name:' name='managerName' value={this.state.managerName} 
                placeholder='Manager Name' onChange={this.handleOnChange} />
            </Form.Group>
            <Form.Button>Create</Form.Button>
        </Form>
      );
    }
  }
  
  export default StoreAdder;