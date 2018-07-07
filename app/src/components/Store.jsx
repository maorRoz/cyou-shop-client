import React, { Component } from 'react';
import {Table,Button,Input} from 'semantic-ui-react'
import {removeStore, updateStore} from '../storeApi'
class Store extends Component {
    constructor(props){
      super(props);
      this.state = {toEdit: false};
      this.removeThisStore = this.removeThisStore.bind(this);
      this.updateThisStore = this.updateThisStore.bind(this);
      this.setEdit = this.setEdit.bind(this);
      this.handleOnChange= this.handleOnChange.bind(this);
      this.unWriteableRow = this.unWriteableRow.bind(this);
      this.writeableRow = this.writeableRow.bind(this);
    }
    setEdit(){
      this.setState({
        toEdit: !this.state.toEdit,
        name: this.props.name,
        address: this.props.address,
        openingHours : this.props.openingHours,
        managerName: this.props.managerName
      });
    }

    handleOnChange(event){
      switch(event.target.name){
        case "name" : this.setState({ name: event.target.value }); break;
        case "address" : this.setState({address: event.target.value}); break;
        case "openingHours" : this.setState({openingHours : event.target.value}); break;
        default: this.setState({managerName : event.target.value}); 
      }
    }
    unWriteableRow(){
      return (        
        <Table.Row>
          <Table.Cell>{this.props.name}</Table.Cell>
          <Table.Cell>{this.props.address}</Table.Cell>
          <Table.Cell>{this.props.openingHours}</Table.Cell>
          <Table.Cell>{this.props.managerName}</Table.Cell>
          <Table.Cell><Button circular color='blue'  icon='edit'  onClick={this.setEdit}/>
          <Button circular color='red' icon='cancel' onClick={this.removeThisStore}/>
          </Table.Cell>
        </Table.Row>)
    }

    writeableRow(){
      return (        
        <Table.Row>
          <Table.Cell><Input value={this.state.name} name='name' onChange={this.handleOnChange}/></Table.Cell>
          <Table.Cell><Input value={this.state.address} name='address' onChange={this.handleOnChange}/></Table.Cell>
          <Table.Cell><Input value={this.state.openingHours} name='openingHours' onChange={this.handleOnChange}/></Table.Cell>
          <Table.Cell><Input value={this.state.managerName} name='managerName' onChange={this.handleOnChange}/></Table.Cell>
          <Table.Cell><Button circular color='green' icon='write' onClick={this.updateThisStore}/>
          <Button circular color='yellow' icon='undo' onClick={this.setEdit} />
          </Table.Cell>
        </Table.Row>)
    }
    async removeThisStore(){
      await removeStore(this.props.id);
      this.props.refresh();
    }
    async updateThisStore(){
      const updatedStore = {
        name : this.state.name,
        address : this.state.address,
        openingHours: this.state.openingHours,
        managerName: this.state.managerName
      }
      await updateStore(this.props.id,updatedStore);
      this.props.refresh();
      this.setState({toEdit: false});
    }
    render() {
      if(!this.state.toEdit){
        return this.unWriteableRow();
      }
      else{
        return this.writeableRow();
      }
    }
  }
  
  export default Store;