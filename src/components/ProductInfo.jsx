function ProductInfo( props ) {
  return (
    <div>
      About:
      <p>{ `Name: ${ props.product.name }` }</p>
      <p>{ `Manufactor: ${ props.product.manufactor }` }</p>
      <p>{ `Amount: ${ props.product.amount }` }</p>
      <p>{ `Price: ${props.product.price}` }</p>
      <button onClick={ () => props.onProductNull() }>Back to products.</button>
    </div>
  );
}

export default ProductInfo;