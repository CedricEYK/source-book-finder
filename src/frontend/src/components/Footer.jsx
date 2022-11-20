import React from 'react'

function Footer({text}) {
  return (
    <footer>
      <div>
        <h2>{ text }</h2>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text: 'By Yours Truely'
}

export default Footer