import React from 'react';

function EmptyList( props ) {
  return (
    <div>
      <p>{ props.message }</p>
      { props.onButtonClick && <button onClick={ () => props.onButtonClick() }> { props.btnMessage } </button> }
    </div>
  );
}

export default EmptyList;