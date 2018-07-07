import React, { Component } from 'react';
import {Table,Button} from 'semantic-ui-react'
import {removeStore} from '../storeApi'
class Store extends Component {
    constructor(props){
      super(props);
      this.removeThisStore = this.removeThisStore.bind(this);
    }
    async removeThisStore(){
      await removeStore(this.props.id);
      this.props.refresh();
    }
    render() {
      return (
        <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.address}</Table.Cell>
        <Table.Cell>{this.props.openingHours}</Table.Cell>
        <Table.Cell>{this.props.managerName}</Table.Cell>
        <Table.Cell><Button circular  icon='edit'></Button>
        <Button circular color='red' icon='cancel' onClick={this.removeThisStore}>
       </Button>
        </Table.Cell>
      </Table.Row>
      );
    }
  }
  
  export default Store;