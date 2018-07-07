import React, { Component } from 'react';
import StoreTable from './StoreTable'
import {Container,Icon,Button} from 'semantic-ui-react'
import {getAllStores,createStore} from '../storeApi'

class StorePanel extends Component {
    constructor(props){
        super(props);
        this.state={data: []};
        this.fetchStores = this.fetchStores.bind(this);
        this.addStore = this.addStore.bind(this);
    }
    componentDidMount(){
        this.fetchStores();
    }
    async addStore(){
        await createStore();
        this.fetchStores();
    }
    async fetchStores(){
        const response = await getAllStores();
        this.setState({data: response});
    }
    render() {
        return (
        <Container>
            <StoreTable data={this.state.data} refresh={this.fetchStores}/>
            <Button onClick={this.addStore}>
                <Button.Content>
                    <Icon name='add' />
                </Button.Content>
            </Button>
            <Button onClick={this.fetchStores}>
                <Button.Content>
                    <Icon name='refresh' />
                </Button.Content>
            </Button>
        </Container>
        );
    }
}

export default StorePanel;