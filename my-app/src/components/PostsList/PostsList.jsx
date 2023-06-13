import React from 'react';
import {Post} from "@components/Post";
import {Row} from "react-bootstrap";

export function PostsList({list}) {
  return (
    <Row className={"justify-content-around"}>
      {list.map(item => (
        <Post key={item.id}
              title={item.title}
              text={item.body}
        />
      ))}
    </Row>
  );
}