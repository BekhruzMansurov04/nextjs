"use client"

import React from 'react';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      <ul className="space-y-2">
        <li>
          <Link href="dashboard/posts" className="text-blue-600 hover:underline">
            📄 Posts
          </Link>
        </li>
        <li>
          <Link href="dashboard/albums" className="text-blue-600 hover:underline">
            🎵 Albums
          </Link>
        </li>
        <li>
          <Link href="dashboard/users" className="text-blue-600 hover:underline">
            👤 Users
          </Link>
        </li>
        <li>
          <Link href="dashboard/todos" className="text-blue-600 hover:underline">
            ✅ Todos
          </Link>
        </li>
        <li>
          <Link href="dashboard/comments" className="text-blue-600 hover:underline">
            💬 Comments
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
