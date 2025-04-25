"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const TodosId = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getTodo = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todoData = await res.json();
        setData(todoData);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    getTodo();
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-lg text-gray-600">⏳ Yuklanmoqda...</p>;
  if (!data) return <p className="text-center mt-10 text-red-500">⚠️ Todo topilmadi.</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{data.title}</h1>
      <div className="text-gray-700 space-y-2">
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Foydalanuvchi ID:</strong> {data.userId}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span
            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
              data.completed ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {data.completed ? "Bajarilgan" : "Bajarilmagan"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TodosId;
