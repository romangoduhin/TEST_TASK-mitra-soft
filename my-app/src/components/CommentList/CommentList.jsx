import React from 'react';
import {Comment} from "@components/Comment"
import {List} from "@templates/List";

export function CommentList({list}) {
  function renderItem(item) {
    return <Comment email={item.email} text={item.body}/>
  }

  return (
    <List list={list} renderItem={renderItem}/>
  );
}