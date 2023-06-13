import React from 'react';
import styles from "./PostBody.module.css"
import {CommentList} from "@components/CommentList/index.js";

export function PostBody({title, text, comments, isCommentsVisible, handleCommentsClick}) {
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <span className={styles.commentariesButton} onClick={handleCommentsClick}>
        Комментарии
      </span>
      {isCommentsVisible && <CommentList list={comments}/>}
    </div>
  )
}