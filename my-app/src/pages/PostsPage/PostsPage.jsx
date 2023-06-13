import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";
import {PostsList} from "@components";
import {Loader, Pagination} from "@templates";
import {useDebounce} from "@utils/hooks/index.js";
import {isArrayEmpty} from "@utils/helpers/index.js";

const POSTS_PER_PAGE = 10;
const TOTAL_POSTS_COUNT = 100;

export function PostsPage() {
  const dispatch = useDispatch();

  const {posts} = useSelector(state => state.posts);
  const delayedPosts = useDebounce(posts, 500);

  const [currentPage, setCurrentPage] = useState(1);

  const isLoading = isArrayEmpty(delayedPosts)

  function getCurrentPosts() {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    return posts.slice(startIndex, endIndex);
  }

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  if (isLoading) return <Loader/>

  return (
    <Container fluid={true} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <PostsList list={getCurrentPosts()}/>
      <Pagination currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  itemsPerPage={POSTS_PER_PAGE}
                  totalCount={TOTAL_POSTS_COUNT}
      />
    </Container>
  );
}