import React, { Component } from 'react';
import Store from './Store'
import {Container} from 'semantic-ui-react'
import {getAllStores} from '../storeApi'
class StoreList extends Component {
    constructor(props){
        super(props);
        this.state = {list : [],toFetch: true}
    }
    async getStoreList(){
        const data = await getAllStores();
        const listItems =  data.map(store => <Store key={store._id} name={store.name} address={store.address}
             openingHours={store.openingHours} managerName={store.managerName}/>)
        this.setState({list : listItems,toFetch: false})
    }
    displayStoreList(){
        if(this.state.toFetch){
            this.getStoreList();
        }
        return this.state.list;
    }
    render() {
        return(
            <Container>
            {this.displayStoreList()}
            </Container>
        )
    }
  }
  
  export default StoreList;