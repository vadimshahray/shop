import ProductItem from './ProductItem';
import EmptyList from './EmptyList';
import FiltersList from './filters/FiltersList';
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
      return (
        <div>
          <FiltersList onFilter={ filters => this.handleFilter( filters ) } />

          <ul className={ `${ styles.products_list } list_default` }>
            {
              this.filteredProducts().map( p =>
                <li key={ p.id }>
                  <ProductItem
                    product={ p }
                    onChoose={ product => this.props.onItemChoose( product ) } />
                </li>
              )
            }
          </ul>
        </div>
      );
    } else {
      return (
        <EmptyList
          message="No products in this group."
          onButtonClick={ () => this.props.onCategoryNull() } />
      );
    }
  }

  filteredProducts() {
    if ( this.state.filters.length > 0 ) {
      return this.props.products.filter( p => {
        this.state.filters.forEach( f => {
          if ( !f( p ) ) {
            return false;
          }
        } );

        return true;
      } );
    } else {
      return this.props.products;
    }
  }


  handleFilter(filters) {
    this.setState({
      filters: filters,
    });
  }
}

export default ProductsList;