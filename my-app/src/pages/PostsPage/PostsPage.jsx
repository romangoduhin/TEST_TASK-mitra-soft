import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";
import {PostsList} from "@components";

export function PostsPage() {
  const dispatch = useDispatch()

  const {posts} = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  return (
    <Container fluid={true}>
      <PostsList list={posts}/>
    </Container>
  );
}