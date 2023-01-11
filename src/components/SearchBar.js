import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('cars');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
      };

    const handleInputChange = (event) => {
      setTerm(event.target.value.replace(/[0-9]/, ''));
    };

    return (
      <div className='search-bar'>
        <form onSubmit={ handleFormSubmit }>
          <label>Enter search term: </label>
          <input value={ term } onChange={ handleInputChange } />
        </form>
      </div>
    );
  }
  
  export default SearchBar;