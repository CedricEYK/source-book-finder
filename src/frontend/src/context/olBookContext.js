import React from 'react';
import axios from 'axios';

import { createContext, useState, useEffect } from 'react';

const OpenLibraryContext = createContext();

export const BookProvider = ({ children }) => {
  const [apiItems, setApiItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('http://localhost:8080/search');
        const data = await response.data;
        setApiItems(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const fetchApiItems = async (searchQuery) => {
    try {
      const params = new URLSearchParams();
      params.append('search', searchQuery);

      const response = await axios.post(
        'http://localhost:8080/search',
        params.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      const data = await response.data;

      setApiItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OpenLibraryContext.Provider
      value={{
        apiItems,
        fetchApiItems,
      }}>
      {children}
    </OpenLibraryContext.Provider>
  );
};

export default OpenLibraryContext;
