import React, { useState, useContext } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import OpenLibraryContext from '../context/olBookContext';

function Form() {
  const [searchQuery, setSearchQuery] = useState('');
  const { fetchApiItems } = useContext(OpenLibraryContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetchApiItems(searchQuery);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>Paste a Wikipedia link here to find the books listed in the source</h3>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Paste the link here'
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
        <Button type='submit'>Search</Button>
      </form>
    </Card>
  );
}

export default Form;
