import React, { useContext, useEffect } from 'react';
import OpenLibraryContext from '../context/olBookContext';
import BookItem from './BookItem';

function BookItemList() {
  const { apiItems, fetchApiItems } = useContext(OpenLibraryContext);

  useEffect(() => {
    fetchApiItems();
  }, []);

  if (!apiItems || apiItems.length === 0) {
    return <p>No Books have been received yet</p>;
    
  }

  return (
    <div className="feedback-list">
      {apiItems.map((item, index) => (
        <BookItem  key={item.id} item={item} />
      ))}
    </div>
  );
}

export default BookItemList;
