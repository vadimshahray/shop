import ProductsDatabase from './database/ProductsDatabase';
import MainContent from './components/MainContent';
import React from 'react';
import './styles/index.css';

class App extends React.Component {
  constructor( props ) {
    super( props );

    ProductsDatabase.initialize();
  }

  render() {
    return <MainContent />
  }
}

export default App;