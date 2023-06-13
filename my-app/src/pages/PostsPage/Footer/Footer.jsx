import React from 'react';
import {Pagination} from "@templates";

export function Footer({currentPage, setCurrentPage, itemsPerPage, totalCount}) {
  return <Pagination currentPage={currentPage}
                     setCurrentPage={setCurrentPage}
                     itemsPerPage={itemsPerPage}
                     totalCount={totalCount}
  />
}