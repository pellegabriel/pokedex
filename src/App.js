import React from 'react';
import Main from './Components/Main';
import './Components/styles.css'
import Header from './Components/Header';
function App() {
  return (
    <>
      <div className='pokeheader'>
      <Header/>
      </div>
      <Main/>
    </>
  );
}

export default App;