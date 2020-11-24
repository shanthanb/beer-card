import React from 'react';
import { Pagination } from 'react-bootstrap'

const CustomPagination = ({currentPage, lastPage, onPageSelect, ...props}) => {
  return (
    <Pagination>
      <Pagination.First disabled={currentPage === 1} onClick={() => {onPageSelect(1)}}/>
      <Pagination.Prev disabled={currentPage === 1} onClick={() => {onPageSelect(currentPage-1)}} />
      <Pagination.Item onClick={() => {onPageSelect(1)}} active={currentPage === 1}>{1}</Pagination.Item>
      {currentPage > 3 && <Pagination.Ellipsis />}

      {currentPage > 2 && <Pagination.Item onClick={() => {onPageSelect(currentPage-1)}}>{currentPage - 1}</Pagination.Item>}
      {currentPage >= 2 && currentPage < lastPage && <Pagination.Item active>{currentPage}</Pagination.Item> }
      {currentPage < lastPage-1 && <Pagination.Item onClick={() => {onPageSelect(currentPage+1)}}>{currentPage + 1}</Pagination.Item>}

      {lastPage-currentPage >= 3 && <Pagination.Ellipsis />}
      {lastPage > 1 && <Pagination.Item onClick={() => {onPageSelect(lastPage)}} active={currentPage === lastPage}>{lastPage}</Pagination.Item>}
      <Pagination.Next disabled={currentPage === lastPage} onClick={() => {onPageSelect(currentPage+1)}}/>
      <Pagination.Last disabled={currentPage === lastPage} onClick={() => {onPageSelect(lastPage)}}/>
    </Pagination>
  );
};

export default CustomPagination;