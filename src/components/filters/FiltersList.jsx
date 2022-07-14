import React from "react";
import FiltersGroup from "./FiltersGroup";
import BooleanFilter from "./BooleanFilter";

class FiltersList extends React.Component {
  #filters = new Map();

  render() {
    return (
      <div>
        <FiltersGroup title="First group">
          <BooleanFilter label="Price" onChange={ value => this.#handleChange("price", value) } />
          <BooleanFilter label="fpfpfp" />
        </FiltersGroup>

        <FiltersGroup title="Second group">
          <BooleanFilter label="asdasd" />
          <BooleanFilter label="12312" />
        </FiltersGroup>

        <button onClick={ () => this.handleAcceptFilters() }>Accept filters</button>
      </div>
    );
  }

  #handleChange(filter, value) {
    this.#filters.set(filter, value);
  }
  #handleAccpetFilters() {
    this.props.onAcceptFilters(this.#filters);
  }
}

export default FiltersList;