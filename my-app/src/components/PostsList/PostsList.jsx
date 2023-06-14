import React from "react";
import {Post} from "@components";
import {List} from "@templates";

export function PostsList({list}) {
  function renderItem(item) {
    return <Post userId={item.userId} title={item.title} text={item.body} postId={item.id}/>
  }

  return (
    <List list={list} renderItem={renderItem}/>
  );
}