import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";
import {PostsList, SearchInput, SortingPanel} from "@components";
import {PageLayout, Pagination} from "@templates";
import {DEFAULT_MODE, KEY_FOR_FILTER, KEY_FOR_SORT, POSTS_PER_PAGE} from "@utils/constants.js";
import {filterObjectsByValue, sortObjectsByOrder} from "@utils/helpers";
import {useDebounce} from "@utils/hooks/index.js";

export function PostsPage() {
  const dispatch = useDispatch();

  const {posts, isLoading} = useSelector(state => state.posts)

  const [currentPage, setCurrentPage] = useState(1);
  const [sortMode, setSortMode] = useState(DEFAULT_MODE);
  const [searchValue, setSearchValue] = useState('');

  const filteredPosts = useDebounce(filterObjectsByValue(posts, searchValue, KEY_FOR_FILTER), 500);

  const sortedPosts = sortObjectsByOrder(filteredPosts, sortMode, KEY_FOR_SORT);

  const totalPostsCount = sortedPosts.length;

  function getCurrentPosts() {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;

    return sortedPosts.slice(startIndex, endIndex);
  }

  useEffect(() => {
    dispatch(getPostsSagaAction())
  }, []);

  return <PageLayout isLoading={isLoading}
                     header={<>
                       <SearchInput value={searchValue} setValue={setSearchValue}/>
                       <SortingPanel value={sortMode} setValue={setSortMode}/>
                     </>}
                     main={<PostsList list={getCurrentPosts()}/>}
                     footer={<Pagination currentPage={currentPage}
                                         setCurrentPage={setCurrentPage}
                                         itemsPerPage={POSTS_PER_PAGE}
                                         totalCount={totalPostsCount}
                     />}
  />
}