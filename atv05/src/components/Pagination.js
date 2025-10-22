import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div style={{ margin: 20 }}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Página Anterior
      </button>
      <span style={{ margin: "0 15px" }}>
        Página {currentPage} de {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próxima Página
      </button>
    </div>
  );
}

export default Pagination;
