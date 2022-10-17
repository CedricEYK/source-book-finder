import React from 'react';
import HeaderCmpnt from './components/Header';
import FooterCmpnt from './components/Footer';

function App() {
  return (
    <>
      <HeaderCmpnt />
      <div className="container">
        <h1>Holla if hear me</h1>
      </div>

      <FooterCmpnt />
    </>
  );
}

export default App;
