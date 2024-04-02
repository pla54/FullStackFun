import React from 'react';
import Header from './Header';
import './App.css';
import FoodList from './food/FootList';

function App() {
  return (
    <div className="App">
      <Header title="Full Stack React & ASP.NET" />
      <FoodList />
    </div>
  );
}

export default App;
