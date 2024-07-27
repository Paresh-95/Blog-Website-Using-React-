import React from "react";
import { NavLink } from "react-router-dom";

function Card({ posts }) {
  return (
   <div key={posts.id} className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg mx-6 my-8 p-5 pb-5 bg-white border shadow-black border-gray-200 rounded-lg shadow-md flex flex-col justify-between h-[auto] sm:h-[28rem] md:h-[30rem] lg:h-[32rem] xl:h-[23rem]">
  <div>
    <NavLink to={`/blog/${posts.id}`}>
    <h2 className="text-2xl font-bold mb-2">{posts.title}</h2>
    </NavLink>
    <p className="text-gray-700 mb-4">
      By{" "}
      <span href="#" className="text-blue-500 hover:underline">
        {posts.author}
      </span>{" "}
      on{" "}
      <NavLink to={`/categories/${posts.category.replaceAll(" ","-")}`} >
      <span href="#" className="text-blue-500 hover:underline">
        {posts.category}
      </span>
      </NavLink>
    </p>
    <p className="text-gray-500 text-sm">Posted On {posts.date}</p>
    <p className="text-gray-700 my-4">
      {posts.content}...
    </p>
  </div>
  <div className="flex flex-wrap gap-2 mt-auto">
    {posts.tags.map((tag, index) => (
      <NavLink key={index} to={`/tags/${tag.replace(" ","-")}`} >
      <span
       
        className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
      >
        {`#${tag}`}
      </span>
      </NavLink>
    ))}
  </div>
</div>

  );
}

export default Card;
