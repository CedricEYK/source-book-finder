import React from 'react';
import { useState } from 'react';
import HeaderCmpnt from './components/Header';
import FooterCmpnt from './components/Footer';
import FormCmpnt from './components/Form';
import BookItemList from './components/BookItemList';
//*App level state
import BookItemData from './data/bookItems';
function App() {
  const [bookItem, setBookItem] = useState(BookItemData);

  return (
    <>
      <HeaderCmpnt />
      <div className="container">
        <FormCmpnt />
        <BookItemList bookItem={bookItem} />
      </div>

      <FooterCmpnt />
    </>
  );
}

export default App;
