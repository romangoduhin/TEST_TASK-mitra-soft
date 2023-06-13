import React from 'react';
import {ListGroup} from 'react-bootstrap';

export function List({list, renderItem}) {
  return (
    <ListGroup as="ul">
      {list.map(item => (
        <ListGroup.Item key={item.id}
                        as="li"
                        style={{border: 0}}
        >
          {renderItem(item)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}