class Filter {
  constructor( label, enable, func ) {
    [ this.label, this.enable, this.func ] = [ label, enable, func ];
  }
}

export default Filter;