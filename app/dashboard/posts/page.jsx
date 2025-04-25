"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
      const posts = await res.json();
      setData(posts);
    };
    getPosts();
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">So'nggi Postlar</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data.map(({ title, id }) => (
          <Link href={`/dashboard/posts/${id}`} key={id}>
            <div className='bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow duration-300 p-5 cursor-pointer'>
              <h2 className='text-lg font-semibold text-gray-800 line-clamp-2'>{title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
