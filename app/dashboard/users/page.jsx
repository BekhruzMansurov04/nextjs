"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const posts = await res.json();
      setData(posts);
    };
    getPosts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Foydalanuvchilar Ro'yxati</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(({ name, id }) => (
          <Link key={id} href={`/dashboard/users/${id}`}>
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition transform duration-300 cursor-pointer">
              <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500 mt-2">Profilni ko'rish →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
