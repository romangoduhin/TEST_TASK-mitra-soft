import React from 'react';
import {Comment} from "@components"
import {List} from "@templates";

export function CommentsList({list, isLoading}) {
  function renderItem(item) {
    return <Comment email={item.email} text={item.body}/>
  }

  return (
    <List list={list} renderItem={renderItem} isLoading={isLoading}/>
  );
}