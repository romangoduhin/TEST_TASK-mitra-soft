import React from 'react';
import {SearchInput, SortingPanel} from "@components";
import {Row} from "react-bootstrap";

export function Header({searchValue, setSearchValue, sortMode, setSortMode}) {
  return <Row className={"w-100 m-0 p-0 flex-row"}>
    <SearchInput value={searchValue} setValue={setSearchValue}/>
    <SortingPanel value={sortMode} setValue={setSortMode}/>
  </Row>
}