function ProductInfo( props ) {
  return (
    <div>
      About:
      <p>{ props.product.name }</p>
      <button onClick={ () => props.onProductNull() }>Back to products.</button>
    </div>
  );
}

export default ProductInfo;