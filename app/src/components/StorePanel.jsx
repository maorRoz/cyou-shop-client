import React, { Component } from 'react';
import StoreTable from './StoreTable'
import StoreAdder from './StoreAdder'
import {Container,Icon,Button} from 'semantic-ui-react'
import {getAllStores,createStore} from '../storeApi'

class StorePanel extends Component {
    constructor(props){
        super(props);
        this.state={data: [],toShowAdder: false};
        this.fetchStores = this.fetchStores.bind(this);
        this.addStore = this.addStore.bind(this);
        this.showAdder = this.showAdder.bind(this);
        this.toggleAdder = this.toggleAdder.bind(this);
    }
    componentDidMount(){
        this.fetchStores();
    }
    async addStore(newStore){
        this.setState({toShowAdder: false});
        await createStore(newStore);
        this.fetchStores();
    }
    async fetchStores(){
        const response = await getAllStores();
        this.setState({data: response});
    }
    toggleAdder(){
        this.setState({toShowAdder: true});
    }
    showAdder(){
        if(this.state.toShowAdder){
            return <StoreAdder adder={this.addStore}/>
        }
    }
    render() {
        return (
        <Container>
            <StoreTable data={this.state.data} refresh={this.fetchStores}/>
            <Button onClick={this.toggleAdder}>
                <Button.Content>
                    <Icon name='add' />
                </Button.Content>
            </Button>
            <Button onClick={this.fetchStores}>
                <Button.Content>
                    <Icon name='refresh' />
                </Button.Content>
            </Button>
            {this.showAdder()}
        </Container>
        );
    }
}

export default StorePanel;