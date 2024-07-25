import React from "react";

function Card({ posts }) {
  return (
    <div className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-6 my-8 p-5 pb-5 bg-white border border-gray-200 rounded-lg shadow-md w-96 h-[25rem] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">{posts.title}</h2>
        <p className="text-gray-700 mb-4">
          By{" "}
          <a href="#" className="text-blue-500 hover:underline">
            {posts.author}
          </a>{" "}
          on{" "}
          <a href="#" className="text-blue-500 hover:underline">
            {posts.category}
          </a>
        </p>
        <p className="text-gray-500 text-sm">Posted On {posts.date}</p>
        <p className="text-gray-700 my-4">
          {posts.content.substring(0, 200)}...
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {posts.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >
            {`#${tag}`}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
