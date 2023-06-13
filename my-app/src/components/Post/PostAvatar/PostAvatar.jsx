import React from "react";
import {Image} from "react-bootstrap";
import styles from "./PostAvatar.module.css";

export function PostAvatar({avatarUrl}) {
  return (
    <div className={styles.avatar}>
      <Image roundedCircle={true}
             variant="top"
             src={avatarUrl}/>
    </div>
  )
}