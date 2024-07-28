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
      <div className=" bg-[#F05941] w-full  p-2 flex flex-row text-center gap-x-2 shadow-md shadow-black justify-around  text-white  ">
        <div className="flex gap-x-5 ">
          {page > 1 && (
            <button
              onClick={() => clickHandler(page - 1)}
              className="border-2 border-black px-2 font-medium  bg-[#FAF0E6] text-black rounded-md "
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => clickHandler(page + 1)}
              className="border-2 border-black px-2 font-medium bg-[#FAF0E6] text-black rounded-md"
            >
              Next
            </button>
          )}
        </div>

        <p className="bg-white rounded-md font-medium border-2 border-black text-black px-3 text-center">
          Page {page} of {totalPages}
        </p>
      </div>
    </>
  );
}

export default Pagination;
