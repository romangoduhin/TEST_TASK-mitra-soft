import React from 'react';
import {Container} from "react-bootstrap";
import avatar from "@assets/images/avatar.svg";
import {PostBody} from "@components/Post/PostBody";
import {PostHeader} from "@components/Post/PostHeader";

export function Post({avatarUrl = avatar, title, text}) {
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
      <PostBody title={title} text={text}/>
    </Container>
  )
}