import React, {useEffect, useState} from 'react';
import avatar from "@assets/images/avatar.svg";
import {PostBody} from "./PostBody";
import {jsonPlaceholderApi} from "@services";
import styles from "./Post.module.scss";
import {CommentsList} from "@components";
import {useDebounce} from "@utils/hooks";
import {isArrayEmpty} from "@utils/helpers/index.js";

export function Post({avatarUrl = avatar, title, text, postId}) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const [comments, setComments] = useState([]);
  const delayedComments = useDebounce(comments, 500);

  const isLoading = isArrayEmpty(delayedComments)

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
      <PostBody title={title}
                text={text}
                avatarUrl={avatarUrl}
                handleCommentsClick={handleCommentsClick}/>

      {isCommentsVisible && <CommentsList list={delayedComments} isLoading={isLoading}/>}
    </div>
  )
}