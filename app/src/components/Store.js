import React, { Component } from 'react';

class Store extends Component {
    render() {
      return (
        <div >
          {this.props.name} {this.props.address} {this.props.openingHours} {this.props.managerName}
        </div>
      );
    }
  }
  
  export default Store;