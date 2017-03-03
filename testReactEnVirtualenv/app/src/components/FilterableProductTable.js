import React from 'react'

import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'


export default class FilterableProductTable extends React.Component{
  constructor(){
    super();
    this.state={
      filter: null,
    }
  }
  filterList(evento) {
    let filter = evento.target.value;
    setTimeout(()=>{
      this.setState({
        filter:filter
      })
    },800)
  }

  render(){
    return (
      <div>
        <SearchBar onChange={this.filterList.bind(this)} />
        <ProductTable products={this.props.store} filter={this.state.filter}/>
      </div>
    )
  }
}
