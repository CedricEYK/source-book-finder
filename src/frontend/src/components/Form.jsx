import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function Form() {
  const [text, setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 5) {
      setMessage('Counting text')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  return (
    <Card>
      <form>
        <h2>Paste a Wikipedia link here</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type="text"
            placeholder='Paste the link here'
          />

          
        </div>
        {message && <div className='message'>{ message }</div>}
        <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        
      </form>
    </Card>
  )
}

export default Form