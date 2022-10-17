import React from 'react'

function Header({text}) {
  return (
    <header>
      <div className='container'>
        <h2>{ text }</h2>
      </div>
    </header>
    
  )
}

Header.defaultProps = {
  text: 'Source book finder UI'
}

export default Header