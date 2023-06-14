import React from 'react';
import {PostsList, SearchInput, SortingPanel} from "@components";
import {Col, Row} from "react-bootstrap";

export function Main({list, searchValue, setSearchValue, sortMode, setSortMode}) {
  return (
    <Row className={"p-0 m-0"}>
      <Row className={"p-0 m-0 d-flex flex-column gap-2"}>
        <Col className={"p-0 m-0"} sm={12}>
          <SearchInput value={searchValue} setValue={setSearchValue}/>
        </Col>
        <Col className={"p-0 m-0"} sm={12}>
          <SortingPanel value={sortMode} setValue={setSortMode}/>
        </Col>
      </Row>
      <PostsList list={list}/>
    </Row>
  )
}