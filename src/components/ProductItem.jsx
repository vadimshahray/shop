import styles from '../styles/components/product_item.module.css';

function ProductItem( props ) {
  return (
    <div className={ styles.product_item }>
      <p onClick={ () => props.onChoose(props.product) }>{ props.product.name }</p>
    </div>
  );
}

export default ProductItem;