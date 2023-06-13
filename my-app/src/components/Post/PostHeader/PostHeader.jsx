import React from 'react';
import {Container, Image} from "react-bootstrap";

export function PostHeader({avatarUrl, height = "100%", width = "20%"}) {
  return (
    <Container style={{
      padding: "10px",
      height: height,
      width: width,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Image roundedCircle={true}
             style={{
               width: "100%",
               height: "100%",
               backgroundColor: "blue",
             }}
             variant="top"
             src={avatarUrl}/>
    </Container>
  )
}