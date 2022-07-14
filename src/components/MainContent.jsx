import React from 'react';
import ShopContainer from './ShopContainer';
import styles from '../styles/components/main_content.module.css';

class MainContent extends React.Component {
  render() {
    return (
      <div className={ styles.main_content }>
        <ShopContainer></ShopContainer>
      </div>
    );
  }
}

export default MainContent;