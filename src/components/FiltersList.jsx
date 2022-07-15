import React from "react";
import Filter from '../models/Filter';
import FiltersGroupM from '../models/FiltersGroup';
import FiltersGroup from "./FiltersGroup";
import BooleanFilter from "./BooleanFilter";

class FiltersList extends React.Component {
  #filters = [
    new FiltersGroupM( "Price", [
      new Filter( "Expensive than 5000", false, p => p.price > 8000 ),
      new Filter( "Only in stoke", false, p => p.amount > 0 ),
    ] ),
    new FiltersGroupM( "Manufactors", [
      new Filter( "Asus", false, p => p.manufactor === "Asus" ),
      new Filter( "Acer", false, p => p.manufactor === "Acer" ),
    ] ),
  ];

  render() {
    return (
      <div>
        {
          this.#filters.map( ( group, i ) =>
            <FiltersGroup key={ i } title={ group.title }>
              {
                group.items.map( ( item, j ) =>
                  <div>
                    <BooleanFilter
                      key={ j }
                      label={ item.label }
                      enable={ item.enable }
                      onChange={ enable => this.#handleChange( i, j, enable ) } />
                  </div>
                )
              }
            </FiltersGroup>
          )
        }

        <button onClick={ () => this.#handleAcceptFilters() }>Accept filters</button>
      </div>
    );
  }

  #handleChange( groupIndex, itemIndex, enable ) {
    this.#filters[ groupIndex ].items[ itemIndex ].enable = enable;
  }

  #handleAcceptFilters() {
    let enabledFilters = [];
    this.#filters.map( g => g.items ).forEach( items => {
      enabledFilters = enabledFilters.concat( items.filter( i => i.enable ).map( i => i.func ) );
    } );

    this.props.onAcceptFilters( enabledFilters );
  }
}

export default FiltersList;