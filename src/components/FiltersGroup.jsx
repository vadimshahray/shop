function FiltersGroup( props ) {
  return (
    <div>
      <h4>{ props.title }</h4>

      <div>
        { props.children }
      </div>
    </div>
  );
}

export default FiltersGroup;