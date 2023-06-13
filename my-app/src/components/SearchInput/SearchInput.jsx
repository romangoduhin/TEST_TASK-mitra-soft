import React from 'react';
import {CloseButton, Form} from 'react-bootstrap';
import styles from "./SearchInput.module.scss";

export function SearchInput({value, setValue}) {
  function handleChange(event) {
    const value = event.target.value
    setValue(value)
  }

  function handleClearInput() {
    setValue('')
  }

  return (
    <div className={styles.searchInput}>
      <Form.Control
        value={value}
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Search by Title"
      />
      <CloseButton onClick={handleClearInput}/>
    </div>
  );
}