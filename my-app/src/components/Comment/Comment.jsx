import React from 'react';
import {Row} from "react-bootstrap";

export function Comment({email, text}) {
  return (
    <Row>
      <h5 className={"text-primary text-decoration-underline"}>{email}</h5>
      <p>{text}</p>
    </Row>
  )
}