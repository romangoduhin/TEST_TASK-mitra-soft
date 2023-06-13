import React, {useEffect, useState} from 'react';
import avatar from "@assets/images/avatar.svg";
import {PostBody} from "@components/Post/PostBody/index.js";
import {PostAvatar} from "./PostAvatar/index.js";
import {jsonPlaceholderApi} from "@services";
import styles from "./Post.module.css";

export function Post({avatarUrl = avatar, title, text, postId}) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [comments, setComments] = useState([]);

  function handleCommentsClick() {
    setIsCommentsVisible(prevState => !prevState)
  }

  async function getComments() {
    const comments = await jsonPlaceholderApi.getComments(postId);

    setComments(comments);
  }

  useEffect(() => {
    if (isCommentsVisible) {
      getComments()
    }
  }, [isCommentsVisible]);


  return (
    <div className={styles.post}>
      <PostAvatar avatarUrl={avatarUrl}/>
      <PostBody title={title}
                text={text}
                comments={comments}
                isCommentsVisible={isCommentsVisible}
                handleCommentsClick={handleCommentsClick}/>
    </div>
  )
}