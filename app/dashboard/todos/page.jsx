"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Todos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      setData(todos);
    };
    getTodos();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todos ro'yxati</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(({ title, id, completed }) => (
          <Link href={`/dashboard/todos/${id}`} key={id}>
            <div className="cursor-pointer border rounded-xl p-4 shadow-md bg-white hover:shadow-lg transition duration-300">
              <h2 className="font-semibold text-gray-800 line-clamp-2 mb-2">{title}</h2>
              <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                completed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {completed ? 'Bajarilgan' : 'Bajarilmagan'}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;
