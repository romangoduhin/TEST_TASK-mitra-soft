import React from 'react';
import styles from "./PostBody.module.scss"
import {Image} from "react-bootstrap";

export function PostBody({title, text, avatarUrl, handleCommentsClick}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}>
        <Image roundedCircle={true} variant="top" src={avatarUrl}/>
      </div>

      <div className={styles.body}>
        <div className={styles.main}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

        <div className={styles.footer}>
            <span className={styles.commentariesButton} onClick={handleCommentsClick}>
               Комментарии
            </span>
        </div>
      </div>
    </div>
  )
}