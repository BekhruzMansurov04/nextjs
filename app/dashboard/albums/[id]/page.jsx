"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const AlbumsId = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const userData = await res.json();
        setData(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center p-4 text-lg">Yuklanmoqda...</div>;
  if (!data) return <div className="flex justify-center items-center p-4 text-lg">Foydalanuvchi topilmadi.</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-100 mt-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{data.title}</h1>
      <div className="space-y-3">
        <p className="text-lg text-gray-600"><strong className="text-gray-900">Id:</strong> {data.id}</p>
        <p className="text-lg text-gray-600"><strong className="text-gray-900">UserId:</strong> {data.userId}</p>
        <p className="text-lg text-gray-600"><strong className="text-gray-900">Title:</strong> {data.title}</p>
      </div>
    </div>
  );
};

export default AlbumsId;
