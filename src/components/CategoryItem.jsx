import React from 'react';
import styles from '../styles/components/category_item.module.css';
import img from '../img/placeholder.svg';

function CategoryItem( props ) {
  return (
    <div className={ styles.choose_category_item }>
      <img
        className={ styles.choose_category_item__img }
        src={ img }
        alt={ `Категория товаров: ${ props.category.name }` } />

      <p className={ styles.choose_category_item__name }>{ props.category.name }</p>
      <button
        className={ styles.choose_category_item__link }
        onClick={ () => props.onChoose( props.category ) }>Перейти</button>
    </div>
  );
}

export default CategoryItem;