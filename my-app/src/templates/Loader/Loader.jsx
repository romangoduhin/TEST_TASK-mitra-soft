import React from 'react';
import {Container, Spinner} from 'react-bootstrap';
import styles from "./Loader.module.css"

export function Loader() {
  return (
    <Container className={`${styles.customContainer} d-flex justify-content-center align-items-center`}>
      <Spinner variant="success" animation="border"/>
    </Container>
  )
}