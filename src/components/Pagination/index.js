import React from "react";

function Pagination({ postsperpage, totalPosts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsperpage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="mt-[20px] w-full text-center">
      <ul className="pagination inline-flex items-center -space-x-px">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white "
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;
