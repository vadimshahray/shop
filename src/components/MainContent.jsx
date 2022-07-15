import ShopContainer from './ShopContainer';
import styles from '../styles/components/main_content.module.css';

function MainContent() {
  return (
    <div className={ styles.main_content }>
      <ShopContainer></ShopContainer>
    </div>
  );
}

export default MainContent;