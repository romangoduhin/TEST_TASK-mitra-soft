import React from "react";
import {CloseButton, Container, Form} from "react-bootstrap";

export function SearchInput({value, setValue}) {
  function handleChange(event) {
    const value = event.target.value
    setValue(value)
  }

  function handleClearInput() {
    setValue("")
  }

  return (
    <Container className={"p-0 d-flex flex-row justify-content-between align-items-center"}>
      <Form.Control value={value}
                    onChange={handleChange}
                    type="text"
                    id="search"
                    placeholder="Search by Title"
      />
      <CloseButton onClick={handleClearInput}/>
    </Container>
  );
}