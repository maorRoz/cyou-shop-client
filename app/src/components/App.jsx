import React, { Component } from 'react';
import '../style/App.css';
import StorePanel from './StorePanel'
import {Segment,Container} from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div>
        <Container className='web-header'>
        <Segment >
          <h1 >Store Management System</h1>
        </Segment>
        </Container>
      <StorePanel/>
      </div>
    );
  }
}

export default App;
