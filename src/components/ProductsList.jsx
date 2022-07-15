import ProductItem from './ProductItem';
import EmptyList from './EmptyList';
import FiltersList from './FiltersList';
import styles from '../styles/components/products_list.module.css';
import React from 'react';

class ProductsList extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      filters: [],
    };
  }

  render() {
    if ( this.props.products.length > 0 ) {
      const products = this.#filteredProducts();

      if ( products && products.length > 0 ) {
        return (
          <div>
            <FiltersList onAcceptFilters={ filters => this.#handleFilter( filters ) } />

            <ul className={ `${ styles.products_list } list_default` }>
              {
                products.map( p =>
                  <li key={ p.id }>
                    <ProductItem
                      product={ p }
                      onChoose={ product => this.props.onItemChoose( product ) } />
                  </li>
                )
              }
            </ul>

            <button onClick={ () => this.props.onCategoryNull() }>Выбырать другую категорию</button>
          </div>
        );
      } else {
        return (
          <div>
            <FiltersList onAcceptFilters={ filters => this.#handleFilter( filters ) } />

            <EmptyList message="No products for enabled filters." />
            <button onClick={ () => this.props.onCategoryNull() }>Выбырать другую категорию</button>
          </div>
        );
      }
    } else {
      return (
        <EmptyList
          message="No products in this group."
          btnMessage="Выбырать другую категорию"
          onButtonClick={ () => this.props.onCategoryNull() } />
      );
    }
  }

  #filteredProducts() {
    const filters = this.state.filters;

    if ( filters.length > 0 ) {
      return this.props.products.filter( p => {
        let correct = true;
        filters.forEach( f => {
          if ( !f( p ) ) {
            correct = false;
            return;
          }
        } );

        return correct;
      } );
    } else {
      return this.props.products;
    }
  }


  #handleFilter( filters ) {
    this.setState( {
      filters: filters,
    } );
  }
}

export default ProductsList;