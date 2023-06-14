import React, {useEffect, useState} from 'react';
import avatar from "@assets/images/avatar.svg";
import {PostBody} from "./PostBody";
import {jsonPlaceholderApi} from "@services";
import {CommentsList} from "@components";
import {isArrayEmpty} from "@utils/helpers";
import {Card} from "react-bootstrap";

export function Post({avatarUrl = avatar, title, text, postId}) {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);

  const [comments, setComments] = useState([]);

  const isLoading = isArrayEmpty(comments)

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
    <Card className={"border-primary border-2"}>
      <PostBody title={title}
                text={text}
                avatarUrl={avatarUrl}
                isCommentsVisible={isCommentsVisible}
                handleCommentsClick={handleCommentsClick}
      />

      {isCommentsVisible && <CommentsList list={comments} isLoading={isLoading}/>}
    </Card>
  )
}