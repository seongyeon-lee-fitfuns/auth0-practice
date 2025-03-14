'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">{error.message}</p>
        <Link href="/" className="minimal-button">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">로그인이 필요합니다</p>
        <Link href="/api/auth/login" className="minimal-button">
          로그인하기
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">프로필 (클라이언트 컴포넌트)</h1>
            <Link href="/" className="hover:underline text-sm">
              홈으로
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Profile Card */}
          <div className="border p-8">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
              {/* Profile Image */}
              <div className="w-32 h-32 relative">
                {user.picture ? (
                  <img 
                    src={user.picture} 
                    alt={user.name || '프로필 이미지'} 
                    className="w-full h-full object-cover rounded-full border"
                  />
                ) : (
                  <div className="w-full h-full rounded-full border bg-gray-100 flex items-center justify-center">
                    <span className="text-2xl">👤</span>
                  </div>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-medium mb-2">
                  {user.name || '이름 없음'}
                </h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                
                {/* Additional User Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  {user.email_verified && (
                    <p className="flex items-center justify-center md:justify-start gap-2">
                      <span className="text-green-500">✓</span> 이메일 인증됨
                    </p>
                  )}
                  <p>마지막 로그인: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-8 border-t flex justify-center gap-4">
              <Link 
                href="/api/auth/logout" 
                className="minimal-button"
              >
                로그아웃
              </Link>
              <Link 
                href="/profile-server" 
                className="minimal-button"
              >
                서버 버전 보기
              </Link>
            </div>
          </div>

          {/* Additional Settings or Info */}
          <div className="mt-8 border p-6">
            <h3 className="text-lg mb-4">계정 설정</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span>이메일 알림</span>
                <button className="minimal-button text-sm">설정</button>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>보안 설정</span>
                <button className="minimal-button text-sm">관리</button>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>개인정보 설정</span>
                <button className="minimal-button text-sm">변경</button>
              </div>
            </div>
          </div>

          {/* Client vs Server Comparison */}
          <div className="mt-8 p-4 border bg-gray-50">
            <p className="text-sm text-gray-600">
              이 페이지는 클라이언트 컴포넌트로 구현되었습니다. 
              브라우저 API가 필요한 경우 클라이언트 컴포넌트를 사용해야 합니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 