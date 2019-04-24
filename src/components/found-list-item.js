import React from 'react';

export default class FoundListItem extends React.Component{
  render(){
    const spanStyle = {
      display: 'block',
    };
    return(
      <li key={this.props.id}>
        <a href="google.com">{this.props.name}</a>
        <span style={spanStyle} >{this.props.description}</span>
      </li>
    )
  }
}
