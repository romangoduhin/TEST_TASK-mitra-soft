import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import avatar from "@assets/images/avatar.svg";
import {PostBody} from "@components/Post/PostBody";
import {PostHeader} from "@components/Post/PostHeader";
import {jsonPlaceholderApi} from "@services";

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
    <Container style={{
      padding: "10px",
      width: "100%",
      minHeight: "200px",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      border: "1px solid blue",
      borderRadius: "10px"
    }}>
      <PostHeader avatarUrl={avatarUrl}/>
      <PostBody title={title}
                text={text}
                comments={comments}
                isCommentsVisible={isCommentsVisible}
                handleCommentsClick={handleCommentsClick}/>
    </Container>
  )
}