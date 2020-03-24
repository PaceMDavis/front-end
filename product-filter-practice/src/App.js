import React from 'react';
// import logo from './logo.svg';
import './App.css';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan = "1">
          {category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

//Within ProductTable we must use a forEach function to go over all the products in the product table and print them in the browser. 
//The last if(product.category !== lastCategory) is responsible for printing everything in the object, with the exception of categories that are null ASK QUESTION
// if indexOf is true says if the search text entered does not match any name at any index, then return
// if inStockOnly && !product.stocked are true means that if inStockOnly is true and the product.stocked = false, then return. This will be used when the checkmark is checked
//Right now inStockOnly is false, but when we setState with the checkbox, and it becomes true, this part of the if statement will remove out of stock items.
class ProductTable extends React.Component {
  
  render() {
    const filterText = this.props.filterText
    const inStockOnly =this.props.inStockOnly

    
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      console.log(product.name.indexOf(filterText) === -1)
      if(product.name.indexOf(filterText) === -1) {
        return;
      }
      if(inStockOnly && !product.stocked) {
        return;
      }
      if(product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow 
          category = {product.category}
          key = {product.category} />
        );
      }
      rows.push(
        <ProductRow
        product = {product}
        key = {product.name} />
      );
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )

  }
}

//SearchBar is pretty straight-forward. We created an input with a checkbox, and then called the value of filterText and inStockOnly respectively
class SearchBar extends React.Component {
  // onFilterTextChange = this.props.onFilterTextChange
  // inStockOnly =this.props.inStockOnly
  constructor(props) {
    super(props);
    this.handleInStockChange = this.handleInStockChange.bind(this)
    this.handleFilterTextUpdate =this.handleFilterTextUpdate.bind(this)
  }
  
  handleInStockChange (event) {
    this.props.onInStockChange(event.target.checked)
  }
  handleFilterTextUpdate (text) {
    this.props.onFilterTextChange(text.target.value)
  }
  render() {
    const filterText = this.props.filterText
    const inStockOnly =this.props.inStockOnly
    return (
      <div className = "Search">
        <form>
          <input type = "text" placeholder = "search" value={filterText} onChange={this.handleFilterTextUpdate} />
          <p>
            <input type="checkbox" checked ={inStockOnly} onChange={this.handleInStockChange}/>
            {' '}
            Only show products in stock
          </p>
        </form>
      </div>
    )
  }
}

//We have our parent class that declares state and passes it down through props
//Inside of it we have the main div, in which we have invoked the SearchBar class, as well as the ProductTable class
//Inside of those invocations, we also have to declare that filterText and inStockOnly are being used, and use this to point to them
//In the case of this.props.products, we have to use props, because products is being passed through the ProductTable class, whereas the rest are declared as state within this class
class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      }
    this.handleInStockChange = this.handleInStockChange.bind(this)
    this.handleFilterTextUpdate =this.handleFilterTextUpdate.bind(this)
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  handleFilterTextUpdate(filterText) {
    this.setState({
      filterText: filterText
    })
  }
  render() {
    return (
      <div>
          <SearchBar filterText ={this.state.filterText} inStockOnly={this.state.inStockOnly} onFilterTextChange={this.handleFilterTextUpdate} onInStockChange={this.handleInStockChange}/>
          <ProductTable products={this.props.products} filterText ={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    )
  }
}

const products = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
      {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
      {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
      {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
      {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
    ];

export default FilterableProductTable;
