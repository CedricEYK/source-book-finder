import React from 'react'

function BookItem({item}) {
  
  return (
    <div className='card'>
      <div className='text-display'>
        {item.title}
      </div>
      <div className='text-display'>
        {item.link}
      </div>
    </div>
  )
}

export default BookItem