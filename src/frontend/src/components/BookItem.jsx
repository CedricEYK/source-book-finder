import React from 'react'
import Card from './shared/Card'
import { FaBookReader } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BookItem({ item }) {
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', ' noopener,noreferrer')
    if (newWindow) {
      newWindow.opener = null
    } 
  }
  
  return (
    <Card className='card'>
      <div className='text-display'>
        {item.title}
      </div>
      <div className='num-display'>
        <Link to='#' onClick={() => openInNewTab(item.link)}><FaBookReader /></Link>
      </div>
    </Card>
  )
}

export default BookItem