import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchNav from './components/SearchNav'
import DataArea from './components/DataArea'

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <SearchNav />
        <DataArea />
      </>
    </div>
  );
}

export default App;
