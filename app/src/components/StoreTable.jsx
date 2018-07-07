import React, { Component } from 'react';
import Store from './Store'
import {Table} from 'semantic-ui-react'

class StoreTable extends Component {
    getStoreList(data){
        return data.map((store) => <Store key={store._id} id={store._id} name={store.name} address={store.address}
             openingHours={store.openingHours} managerName={store.managerName} refresh={this.props.refresh}/>)
    }
    render() {
        return(
            <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Store Name</Table.HeaderCell>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.HeaderCell>Opening Hours</Table.HeaderCell>
                <Table.HeaderCell>Manager Name</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
            {this.getStoreList(this.props.data)}
            </Table.Body>
            </Table>
        )
    }
  }
  
  export default StoreTable;