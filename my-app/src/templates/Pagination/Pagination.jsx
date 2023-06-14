import React from 'react';
import {Pagination as BootstrapPagination} from 'react-bootstrap';
import {scrollToTop} from "@utils/helpers/index.js";

export function Pagination({currentPage, setCurrentPage, itemsPerPage, totalCount}) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  function handlePageClick(pageNumber) {
    setCurrentPage(pageNumber);
    scrollToTop();
  }

  function renderPaginationItems() {
    const paginationItems = [];

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      paginationItems.push(
        <BootstrapPagination.Item key={pageNumber}
                                  active={pageNumber === currentPage}
                                  onClick={() => handlePageClick(pageNumber)}
                                  activeLabel=""
        >
          {pageNumber}
        </BootstrapPagination.Item>
      );
    }

    return paginationItems;
  }

  return (
    <BootstrapPagination className={"d-flex justify-content-center"}>
      {renderPaginationItems()}
    </BootstrapPagination>
  )
}