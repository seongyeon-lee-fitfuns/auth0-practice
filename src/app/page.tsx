'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b">
        <nav className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Admin</h1>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:underline">홈</Link>
              <Link href="/admin" className="hover:underline">관리자</Link>
              <Link href="/about" className="hover:underline">소개</Link>
            </div>
            <button 
              className="md:hidden minimal-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              메뉴
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link href="/" className="block">홈</Link>
              <Link href="/admin" className="block">관리자</Link>
              <Link href="/about" className="block">소개</Link>
            </div>
          )}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-4xl mb-6">Next.js - Auth0 mini project</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Next.js 기반의 Auth0 최소 프로젝트
          </p>
          <Link 
            href="/admin" 
            className="minimal-button"
          >
            시작하기
          </Link>
        </section>

      </main>

      <footer className="border-t fixed bottom-0 w-full bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-gray-600">
          <p>© 2025 Admin</p>
        </div>
      </footer>
    </div>
  );
}
