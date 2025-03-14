/* eslint-disable @next/next/no-html-link-for-pages */
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authButtons = [
    { href: '/api/auth/login', label: '로그인', icon: '🔑' },
    { href: '/api/auth/logout', label: '로그아웃', icon: '👋' },
    { href: '/api/auth/callback', label: '콜백', icon: '🔄' },
    { href: '/profile-server', label: '내 정보', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b">
        <nav className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Admin</h1>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:underline">홈</a>
              <a href="/admin" className="hover:underline">관리자</a>
              <a href="/about" className="hover:underline">소개</a>
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
        <section className="py-20">
          <h1 className="text-4xl mb-6 text-center">Next.js - Auth0 mini project</h1>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
            Next.js 기반의 Auth0 최소 프로젝트
          </p>
          
          {/* Auth0 Endpoints Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {authButtons.map((button) => (
              <Link 
                key={button.href}
                href={button.href} 
                className="aspect-square border group hover:border-black transition-colors duration-200"
              >
                <div className="h-full flex flex-col items-center justify-center p-4">
                  <span className="text-3xl mb-2">{button.icon}</span>
                  <span className="text-sm text-gray-600 group-hover:text-black">
                    {button.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/admin" 
              className="minimal-button"
            >
              시작하기
            </Link>
          </div>
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
