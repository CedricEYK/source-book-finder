import React from 'react'
import BookItem from './BookItem'

function BookItemList({ bookItem }) {
  if (!BookItem || bookItem.length === 0) {
    return <p>No Items Yet</p>
  }
  return (
    <div className='feedback-list'>
      {bookItem.map((item) => (
        <BookItem key={item.id} item={ item} />
      ))}
    </div>
  )
}

export default BookItemList