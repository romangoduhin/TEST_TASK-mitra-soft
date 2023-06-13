import React from 'react';
import {Card} from "react-bootstrap";
import avatar from "@assets/images/avatar.svg";

export function Post({avatarUrl = avatar, title, text}) {
  return (
    <Card style={{marginTop: "20px", width: '330px'}}>
      <Card.Img style={{height: "30%"}} variant="top" src={avatarUrl}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}