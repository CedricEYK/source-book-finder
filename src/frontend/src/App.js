import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderCmpnt from './components/Header';
import FooterCmpnt from './components/Footer';
import FormCmpnt from './components/Form';
import BookItemList from './components/BookItemList';
//*App level state
import { BookProvider } from './context/olBookContext';
function App() {
  //* Global state
  const [bookItem, setBookItem] = useState({});

  return (
    <BookProvider>
      <Router>
        <HeaderCmpnt />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FormCmpnt />
                  <BookItemList {...bookItem} />
                </>
              }></Route>
          </Routes>
        </div>

        <FooterCmpnt />
      </Router>
    </BookProvider>
  );
}

export default App;
