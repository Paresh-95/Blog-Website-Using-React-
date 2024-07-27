import React from 'react'
import { NavLink } from 'react-router-dom'


function LargeCard({posts}) {
  return (
     <div key={posts.id} className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-screen-lg mx-6 my-8 p-5 pb-5 bg-[#1F2937] text-[#F9D689] border font-bold shadow-black border-gray-200 rounded-lg shadow-md flex flex-col justify-between h-[auto] sm:h-[28rem] md:h-[30rem] lg:h-[32rem] xl:h-[23rem]">
  <div>
    <NavLink to={`/blog/${posts.id}`}>
    <h2 className="text-4xl font-extrabold mb-2">{posts.title}</h2>
    </NavLink>
    <p className="text-white my-4 text-xl ">
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
    <p className="text-slate-100 text-lg">Posted On <span className='text-gray-100'>{posts.date}</span></p>
    <p className="text-white mt-6 text-xl">
      {posts.content}
    </p>
  </div>
  <div className="flex flex-wrap gap-2  mt-4">
    {posts.tags.map((tag, index) => (
      <NavLink key={index} to={`/tags/${tag.replace(" ","-")}`} >
      <span
        className="inline-block bg-gray-700 text-white text-base font-semibold mr-2 px-2.5 py-0.5 rounded"
      >
        {`#${tag}`}
      </span>
      </NavLink>
    ))}
  </div>
</div>
  )
}

export default LargeCard