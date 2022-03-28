import React from 'react';
import './Pagination.css';

const Pagination = ({ plantsPerPage, totalPlants, paginate, currentPage }) => {
  const pageNumbers = [];
  // console.log(currentPage);

  for (let i = 1; i <= Math.ceil(totalPlants / plantsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={ (currentPage === number) ? 'page-item current' : 'page-item'}>
            <span onClick={() => paginate(number)} className='page-link'>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;