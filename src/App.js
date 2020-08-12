import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchNav from './components/SearchNav'
import DataContainer from './components/DataContainer'

function App() {
  return (
    <div className="App">
        <Header />
      <div className="container">
        <SearchNav />
        <DataContainer />
      </div>
    </div>
  );
}

export default App;
