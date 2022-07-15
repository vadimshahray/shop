import React from 'react';
import CategoryItem from './CategoryItem';
import styles from '../styles/components/category_list.module.css';

function CategoryList( props ) {
  return (
    <ul className={ `${ styles[ 'choose_category_list' ] } list_default` }>
      {
        props.categories.map( item =>
          <li key={ item.id }>
            <CategoryItem
              category={ item }
              onChoose={ category => props.onItemChoose( category ) } />
          </li>
        )
      }
    </ul>
  );
}

export default CategoryList;