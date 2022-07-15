import React from 'react';

class BooleanFilter extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      enable: this.props.enable ?? false,
    };
  }

  render() {
    return (
      <label>{ this.props.label }
        <input
          type="checkbox"
          checked={ this.state.enable }
          onChange={ event => this.#handleChange( event ) } />
      </label>
    );
  }

  #handleChange( event ) {
    const newValue = event.target.checked;

    this.setState( {
      enable: newValue
    } );

    this.props.onChange( newValue );
  }
}

export default BooleanFilter;