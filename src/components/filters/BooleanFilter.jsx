import React from 'react';

class BooleanFilter extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      value: this.props.value,
    };
  }

  render() {
    alert( 'rerender' );

    return (
      <div>
        <label>{ this.props.label } <br />
          <input
            type="checkbox"
            value={ this.state.value }
            onChange={ event => this.handleChange( event ) } />
        </label>
      </div>
    );
  }

  handleChange( event ) {
    this.setState( {
      value: event.target.value
    } );

    this.props.onChange( this.state.value );
  }
}

export default BooleanFilter;