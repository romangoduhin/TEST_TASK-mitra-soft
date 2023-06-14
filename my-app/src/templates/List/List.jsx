import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {Loader} from "@templates";

export function List({list, renderItem, isLoading}) {
  return (
    <ListGroup className={"p-0 m-0"} as="ul">
      {isLoading && <Loader/>}

      {list.map(item => (
        <ListGroup.Item className={"p-2 border-0"} key={item.id} as="li">
          {renderItem(item)}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}