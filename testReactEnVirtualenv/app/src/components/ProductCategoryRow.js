import React from 'react'

export default class ProductCategoryRow extends React.Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props.category);
    return (
      <h4>{this.props.category}</h4>
    );
  }
}
