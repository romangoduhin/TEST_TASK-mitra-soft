import React from 'react';
import styles from "./Comment.module.css";

export function Comment({email, text}) {
  return (
    <div className={styles.comment}>
      <h5>{email}</h5>
      <p>{text}</p>
    </div>
  )
}