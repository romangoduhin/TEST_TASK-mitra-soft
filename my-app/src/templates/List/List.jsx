import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Loader} from "@templates";

export function List({list, renderItem, isLoading}) {
  return (
    <ListGroup as="ul">
      {isLoading && <Loader/>}

      {list.map(item => (
        <ListGroup.Item key={item.id} as="li" style={{border: 0}}>
          {renderItem(item)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}