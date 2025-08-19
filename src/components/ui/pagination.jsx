import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

export function Pagination({ currentPage, totalPages, onPageChange }) {
  // Ensure we have valid props to prevent crashes
  if (!totalPages || totalPages <= 0 || !currentPage || currentPage <= 0) {
    return null;
  }

  const getPageRange = () => {
    const delta = 2; // Number of pages to show before and after the current page
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <nav className="flex justify-center items-center space-x-2" aria-label="Pagination">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="h-10 w-10"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {getPageRange().map((page, index) => (
        <React.Fragment key={index}>
          {page === '...' ? (
            <span className="px-2 py-2 text-gray-500">...</span>
          ) : (
            <Button
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => handlePageChange(page)}
              aria-label={`Page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className="h-10 w-10"
            >
              {page}
            </Button>
          )}
        </React.Fragment>
      ))}
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="h-10 w-10"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </nav>
  )
}
