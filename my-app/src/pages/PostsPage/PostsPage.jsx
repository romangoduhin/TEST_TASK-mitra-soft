import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";
import {PostsList, SearchInput} from "@components";
import {Loader, Pagination} from "@templates";
import {useDebounce} from "@utils/hooks/index.js";
import {isArrayEmpty} from "@utils/helpers/index.js";

const POSTS_PER_PAGE = 10;

export function PostsPage() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const {posts} = useSelector(state => state.posts);

  const delayedPosts = useDebounce(posts, 500);

  const filteredPosts = delayedPosts.filter((post) => {
    const postTitle = post.title.toLowerCase()

    return postTitle.includes(searchValue.toLowerCase())
  })

  const isLoading = isArrayEmpty(filteredPosts)

  function getCurrentPosts() {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    return filteredPosts.slice(startIndex, endIndex);
  }

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  return (
    <Container fluid={true} style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {
        isLoading
          ? <Loader/>
          : <>
            <SearchInput value={searchValue} setValue={setSearchValue}/>
            <PostsList list={getCurrentPosts()}/>
            <Pagination currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsPerPage={POSTS_PER_PAGE}
                        totalCount={filteredPosts.length}
            />
          </>
      }
    </Container>
  );
}