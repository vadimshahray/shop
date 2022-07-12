import React from 'react';
import ChooseCategoryItem from './ChooseCategoryItem';
import styles from '../styles/components/choose-category-list.module.css';

class ChooseCategoryList extends React.Component {
  #categories;

  constructor(props) {
    super(props);

    this.#categories = props.categories;
  }

  render() {
    return <React.Fragment>
      <ul className={ `${styles['choose_category_list']} list_default` }>
      {
        this.#categories.map( item => 
          <li key={ item.id }>
            <ChooseCategoryItem 
              category={ item } 
              onChoose={ category => this.props.onChoose(category) } />
          </li>
        )
      }
      </ul>
    </React.Fragment>
  }
}

export default ChooseCategoryList;