import React from 'react'

export default class SearchBar extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <input type="text" onChange={this.props.onChange}></input>
        <input type="checkbox"></input>
      </div>
    );
  }

}
