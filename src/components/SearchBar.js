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
      <div>
        <form onSubmit={ handleFormSubmit }>
          <input value={ term } onChange={ handleInputChange } />
        </form>
      </div>
    );
  }
  
  export default SearchBar;