"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const UserId = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getUser = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

  if (loading) return <p className="text-center mt-10 text-gray-500">Yuklanmoqda...</p>;
  if (!data) return <p className="text-center mt-10 text-red-500">Foydalanuvchi topilmadi.</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.name}</h1>
      
      <div className="space-y-3 text-gray-700">
        <p><span className="font-semibold text-gray-900">Username:</span> @{data.username}</p>
        <p><span className="font-semibold text-gray-900">Email:</span> <a href={`mailto:${data.email}`} className="text-blue-500 underline">{data.email}</a></p>
        <p><span className="font-semibold text-gray-900">Telefon:</span> {data.phone}</p>
        <p><span className="font-semibold text-gray-900">Sayt:</span> <a href={`http://${data.website}`} target="_blank" className="text-blue-500 underline">{data.website}</a></p>
        <p><span className="font-semibold text-gray-900">Kompaniya:</span> <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded text-sm">{data.company?.name}</span></p>
      </div>
    </div>
  );
};

export default UserId;
