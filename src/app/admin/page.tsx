'use client';

import { useState } from 'react';

export default function AdminDashboard() {
  const [stats] = useState({
    users: 1234,
    revenue: '$45,678',
    orders: 890,
    visitors: 12345
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-xl">관리자 대시보드</h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-48 hidden md:block">
            <nav className="space-y-4">
              <a href="#" className="block hover:underline">대시보드</a>
              <a href="#" className="block hover:underline">사용자 관리</a>
              <a href="#" className="block hover:underline">주문 관리</a>
              <a href="#" className="block hover:underline">설정</a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="border p-4">
                <p className="text-sm text-gray-600">총 사용자</p>
                <p className="text-2xl">{stats.users}</p>
              </div>
              <div className="border p-4">
                <p className="text-sm text-gray-600">총 매출</p>
                <p className="text-2xl">{stats.revenue}</p>
              </div>
              <div className="border p-4">
                <p className="text-sm text-gray-600">주문 수</p>
                <p className="text-2xl">{stats.orders}</p>
              </div>
              <div className="border p-4">
                <p className="text-sm text-gray-600">방문자 수</p>
                <p className="text-2xl">{stats.visitors}</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="border p-4">
              <h2 className="text-lg mb-4">최근 활동</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-b pb-4">
                    <p className="text-gray-600">활동 내역 {i}</p>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
} 