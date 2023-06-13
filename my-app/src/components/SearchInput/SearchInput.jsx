import React from 'react';
import {Form} from 'react-bootstrap';

export function SearchInput({value, setValue}) {
  function handleChange(event) {
    const value = event.target.value
    setValue(value)
  }

  return (
    <>
      <Form.Label htmlFor="search">Search</Form.Label>
      <Form.Control
        value={value}
        onChange={handleChange}
        type="text"
        id="search"
      />
    </>
  );
}