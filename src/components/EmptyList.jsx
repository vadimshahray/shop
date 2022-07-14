import React from 'react';

function EmptyList( props ) {
  return (
    <div>
      <p>{ props.message }</p>
      <button onClick={ () => props.onButtonClick() }>Выбырать другую категорию</button>
    </div>
  );
}

export default EmptyList;