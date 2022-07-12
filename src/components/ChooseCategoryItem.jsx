import React from 'react';
import styles from '../styles/components/choose-category-item.module.css';
import img from '../img/placeholder.svg';

class ChooseCategoryItem extends React.Component {
  render() {
    return (
      <div className={ styles.choose_category_item }>
        <img 
          className={ styles.choose_category_item__img } 
          src={ img } 
          alt={ `Категория товаров: ${this.props.category.name}` } />
        <p className={ styles.choose_category_item__name }>{ this.props.category.name }</p>
        <button 
          className={ styles.choose_category_item__link }
          onClick={ () => this.props.onChoose(this.props.category) }>Перейти</button>
      </div>
    );
  }
}

export default ChooseCategoryItem;