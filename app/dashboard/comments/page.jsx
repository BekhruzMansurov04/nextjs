"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Comments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const posts = await res.json();
      setData(posts);
    };
    getPosts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map(({ email, id }) => (
        <div
          key={id}
          className="flex flex-col bg-amber-400 hover:bg-amber-500 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300"
        >
          <Link href={`/dashboard/comments/${id}`} className="flex-1 p-6">
            <h2 className="font-semibold text-lg text-blue-600">{email}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Comments;
