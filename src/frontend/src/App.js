import React from 'react';
import HeaderCmpnt from './components/Header';
import FooterCmpnt from './components/Footer';
import FormCmpnt from './components/Form';

function App() {
  return (
    <>
      <HeaderCmpnt />
      <div className="container">
        <h1>Holla if hear me</h1>
        <FormCmpnt></FormCmpnt>
      </div>

      <FooterCmpnt />
    </>
  );
}

export default App;
