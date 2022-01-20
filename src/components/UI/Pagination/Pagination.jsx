import React, {useState} from 'react';

const Pagination = (props) => {
  const paginationItems = new Array(props.totalPages).fill(1).map((item, i,) => (
      <li
          onClick={ () => (props.onChange(i+1)) }
          className={`page-item ${props.currentPage === (i + 1) ? "active" : ""}`}
          key={i}>
        <a className="page-link">{i + 1}</a>
      </li>
  ))

  return (
      <nav className={"d-flex justify-content-center"} aria-label="Page navigation example">
        <ul className="pagination ">
          {paginationItems}
        </ul>
      </nav>
  );
};

export default Pagination;
