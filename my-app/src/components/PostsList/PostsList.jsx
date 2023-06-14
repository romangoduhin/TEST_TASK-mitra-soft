import React from 'react';
import {Post} from "@components/Post";
import {List} from "@templates/List";

export function PostsList({list}) {
  function renderItem(item) {
    return <Post userId={item.userId} title={item.title} text={item.body} postId={item.id}/>
  }

  return (
    <List list={list} renderItem={renderItem}/>
  );
}