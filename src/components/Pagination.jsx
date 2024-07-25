import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Pagination() {
  const { totalPages, page, handlePageChange } = useContext(AppContext);

  function clickHandler(page) {
    console.log(page);
    handlePageChange(page);
  }

  return (
    <>
      <div className="w-full p-2 flex flex-row text-center gap-x-2 shadow-md justify-around border border-black  ">
        <div className="flex gap-x-5 ">
          {page > 1  && (
            <button
              onClick={()=>clickHandler(page-1)}
              className="border-2 border-black px-2 "
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={()=>clickHandler(page+1)}
              className="border-2 border-black px-2 "
            >
              Next
            </button>
          )}
        </div>
        <p>
          Page {page} of {totalPages}
        </p>
      </div>
    </>
  );
}

export default Pagination;
