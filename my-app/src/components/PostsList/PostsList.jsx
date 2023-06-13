import React from 'react';
import {Post} from "@components/Post";
import {ListGroup} from 'react-bootstrap';

export function PostsList({list}) {
  return (
    <ListGroup as="ul">
      {list.map(item => (
        <ListGroup.Item key={item.id}
                        as="li"
                        style={{border: "none"}}
        >
          <Post title={item.title}
                text={item.body}
                postId={item.id}
          />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}