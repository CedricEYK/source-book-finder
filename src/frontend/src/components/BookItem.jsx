import React from 'react';
import Card from './shared/Card';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BookItem({ item }) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <Card className='card'>
      <div className='text-display'>
        <h3>{item.title}</h3>
        {item.subtitle && <h4>{item.subtitle}</h4>}
        {item.authors && item.authors.map((author) => <p>{author}</p>)}
        {item.covers && <img src={item.covers} />}
        {item.key && (
          <Link to='#' onClick={() => openInNewTab(item.key)}>
            <FaBookReader /> View on Open Library
          </Link>
        )}
      </div>
    </Card>
  );
}

export default BookItem;
