import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {EmptyContent, Loader} from "@templates";
import {isArrayEmpty} from "@utils/helpers/index.js";

export function List({list, renderItem, isLoading}) {
  if (isArrayEmpty(list) && !isLoading) return <EmptyContent/>

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