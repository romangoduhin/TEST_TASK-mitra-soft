import React from 'react';
import {Spinner} from 'react-bootstrap';
import styles from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={styles.loader}>
      <Spinner animation="border"/>
    </div>
  )
}