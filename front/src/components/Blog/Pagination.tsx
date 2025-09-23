"use client";

import { useState, useEffect } from "react";

interface PaginationProps {
  list_page: (page: number) => void;
  count: number;
  type: "small" | "medium" | "large";
}

function Pagination({ list_page, count, type }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(5); // Default to small

  useEffect(() => {
    if (type === "small") {
      setListingsPerPage(5);
    } else if (type === "medium") {
      setListingsPerPage(9);
    } else if (type === "large") {
      setListingsPerPage(18);
    }
  }, [type]);

  const totalPages = count;

  const visitPage = (page: number) => {
    setCurrentPage(page);
    list_page(page);
  };

  const previous_number = () => {
    if (currentPage > 1) {
      visitPage(currentPage - 1);
    }
  };

  const next_number = () => {
    if (currentPage < totalPages) {
      visitPage(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 3; // Cuántos números de página mostrar al mismo tiempo
    let startPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 2); // Empieza en 2, ya que siempre mostramos la primera
    let endPage = Math.min(startPage + maxPageNumbers - 1, totalPages - 1); // Termina antes de la última

    // Ajustar si el rango es menor que maxPageNumbers
    if (endPage - startPage < maxPageNumbers - 1) {
      startPage = Math.max(endPage - maxPageNumbers + 1, 2);
    }

    // Añadir siempre la primera página
    pageNumbers.push(
      <div
        key={1}
        onClick={() => visitPage(1)}
        className={`h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer ${
          currentPage === 1
            ? "bg-primary font-bold text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        1
      </div>
    );

    // Añadir puntos suspensivos si hay un salto entre la primera página y el rango
    if (startPage > 2) {
      pageNumbers.push(
        <span key="dots-start" className="px-2">
          ...
        </span>
      );
    }

    // Añadir el rango de páginas
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => visitPage(i)}
          className={`h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer ${
            i === currentPage
              ? "bg-primary font-bold text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          {i}
        </div>
      );
    }

    // Añadir puntos suspensivos si hay un salto entre el rango y la última página
    if (endPage < totalPages - 1) {
      pageNumbers.push(
        <span key="dots-end" className="px-2">
          ...
        </span>
      );
    }

    // Añadir siempre la última página
    if (totalPages > 1) {
      pageNumbers.push(
        <div
          key={totalPages}
          onClick={() => visitPage(totalPages)}
          className={`h-10 w-10 rounded-full flex items-center justify-center mx-1 cursor-pointer ${
            currentPage === totalPages
              ? "bg-primary font-bold text-white"
              : "bg-gray-100 text-black"
          }`}
        >
          {totalPages}
        </div>
      );
    }

    return pageNumbers;
  };

  return (
    <nav className="px-4 flex items-center justify-center sm:px-0 pt-2 gap-x-3">
      <div className="">
        <button
          onClick={previous_number}
          disabled={currentPage === 1}
          className="text-sm font-poppins-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border border-[#58ab32] h-10 w-10 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left stroke-[#58ab32]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center">{getPageNumbers()}</div>

      <div className="">
        <button
          onClick={next_number}
          disabled={currentPage === totalPages}
          className="text-sm font-poppins-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 border border-[#58ab32] h-10 w-10 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right stroke-[#58ab32]"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Pagination;
