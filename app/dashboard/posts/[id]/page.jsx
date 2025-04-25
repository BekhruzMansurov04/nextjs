"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PostId = () => {
  const params = useParams();
  const id = params?.id;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await res.json();
        setData(post);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center p-4">Yuklanmoqda...</div>;
  if (!data) return <div className="flex justify-center items-center p-4">Post topilmadi.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-lg rounded-xl border border-gray-100">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">{data.title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">{data.body}</p>
    </div>
  );
};

export default PostId;
