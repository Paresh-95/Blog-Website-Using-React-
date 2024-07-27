import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton({ category, tag, blog }) {
  const navigate = useNavigate();

  return (
    <>
      <div className='bg-[#433D8B] flex flex-row items-center justify-center'>
        <button className="bg-[#FAF0E6] px-3 py-1 font-bold text-xl rounded" onClick={() => navigate(-1)}>
          Back
        </button>
        {blog ? (
            
          <h2 className="text-3xl text-[#FAF0E6] font-bold text-center p-5 ">Blog</h2>
        ) : (
          category ? (
            <h2 className="text-3xl text-[#FAF0E6] font-bold text-center p-5 ">Blog on #{category}</h2>
          ) : (
            <h2 className="text-3xl text-[#FAF0E6] font-bold text-center p-5">
              Blog Tagged <span>#{tag}</span>
            </h2>
          )
        )}
      </div>
    </>
  );
}

export default BackButton;
