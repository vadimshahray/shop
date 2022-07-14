import React from 'react';
<<<<<<< HEAD
import ProductsDatabase from '../database/ProductsDatabase';
import CategoryList from './CategoryList';
import ProductsList from './ProductsList';
import ProductInfo from './ProductInfo';
=======
import ChooseCategoryList from './ChooseCategoryList';
import ProductsDatabase from '../database/ProductsDatabase';
>>>>>>> 3c13ba8732ab4713e40807995b8f35fa4fca9be8

class ShopContainer extends React.Component {
  #products = null;
  #categories = null;

  constructor( props ) {
    super( props );

    this.#products = ProductsDatabase.selectAllProducts();
    this.#categories = ProductsDatabase.selectAllCategories();

    this.state = {
      currentProduct: null,
      currentCategory: null,
    }
  }

  render() {
    if ( this.state.currentCategory === null ) {
      return (
        <CategoryList
          categories={ this.#categories }
          onItemChoose={ category => this.#handleCategoryChoose( category ) } />
      );
    } else if ( this.state.currentProduct === null ) {
      return (
        <ProductsList
          products={ this.#getCategoryProducts() }
          onItemChoose={ product => this.#handleProductChoose( product ) }
          onCategoryNull={ () => this.#handleCategoryNull() } />
      );
    } else {
      return (
        <ProductInfo
          product={ this.state.currentProduct }
          onProductNull={ () => this.#handleProductNull() } />
      );
    }
  }


  #getCategoryProducts() {
    return this.#products.filter( p => p.category === this.state.currentCategory.name );
  }


  #handleCategoryChoose( category ) {
    this.setState( {
      currentCategory: category
    } );
  }
  #handleCategoryNull() {
    this.setState( {
      currentCategory: null
    } );
  }

  #handleProductChoose( product ) {
    this.setState( {
      currentProduct: product
    } );
  }
  #handleProductNull() {
    this.setState( {
      currentProduct: null
    } );
  }
}

export default ShopContainer;