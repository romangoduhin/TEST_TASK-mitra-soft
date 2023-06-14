import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";
import {PageLayout} from "@templates";
import {DEFAULT_MODE, KEY_FOR_FILTER, KEY_FOR_SORT, POSTS_PER_PAGE} from "@constants";
import {filterObjectsByValue, sortObjectsByOrder} from "@helpers";
import {Main} from "./Main";
import {Footer} from "./Footer";
import {AlertContext} from "@context";

export function PostsPage() {
  const dispatch = useDispatch();

  const showAlert = useContext(AlertContext);

  const {posts, errorMessage, isLoading} = useSelector(state => state.posts)

  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState(DEFAULT_MODE);
  const [searchValue, setSearchValue] = useState("");

  const filteredPosts = filterObjectsByValue(posts, searchValue, KEY_FOR_FILTER)

  const sortedPosts = sortObjectsByOrder(filteredPosts, sortMode, KEY_FOR_SORT);

  const totalPostsCount = sortedPosts.length;

  function getCurrentPosts() {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    return sortedPosts.slice(startIndex, endIndex);
  }

  useEffect(() => {
    if (errorMessage) {
      showAlert(errorMessage)
    }
  }, [errorMessage]);

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  return <PageLayout
    isLoading={isLoading}
    main={<Main list={getCurrentPosts()}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                sortMode={sortMode}
                setSortMode={setSortMode}
    />}
    footer={<Footer currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    itemsPerPage={POSTS_PER_PAGE}
                    totalCount={totalPostsCount}/>}
  />
}