import React from 'react';
import ChooseCategoryList from './ChooseCategoryList';
import ProductsDatabase from '../database/ProductsDatabase';

class ShopContainer extends React.Component {
  #products = null;
  #categories = null;

  constructor(props) {
    super(props);

    this.#products   = ProductsDatabase.selectAllProducts();
    this.#categories = ProductsDatabase.selectAllCategories();

    this.state = {
      currentProduct: null,
      currentCategory: null,
    }
  }


  render() {
    return (
      this.state.currentCategory === null
        ? <ChooseCategoryList categories={ this.#categories } onChoose={ category => this.handleCategoryChoose(category) } />
        : <span>{ `Chosen category is ${ this.state.currentCategory.name }` }</span> 
    );
  }

  handleCategoryChoose(category) {
    this.setState({
      currentCategory: category
    });
  }
}

export default ShopContainer;