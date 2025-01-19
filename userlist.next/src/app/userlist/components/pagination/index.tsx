// Main
import { FC } from 'react';
// Provider
import CustomIconProvider from 'providers/icon_provider';
// Types
import { paginationProps } from 'app/userlist/types';

const Pagination: FC<paginationProps> = ({
  currentPage,
  setCurrentPage,
  resultsPerPage,
  totalResults,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="pagination">
      <button onClick={handlePreviousPage}>
        <CustomIconProvider icon="ArrowLeft2" size={25} />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button onClick={handleNextPage}>
        <CustomIconProvider icon="ArrowRight2" size={25} />
      </button>
    </div>
  );
};
export default Pagination;
