import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function ProfileServer() {
  const session = await getSession();

  if (!session?.user) {
    redirect('/api/auth/login');
  }

  const user = session.user;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl">프로필 (서버 컴포넌트)</h1>
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
                  <Image 
                    src={user.picture}
                    alt={user.name || '프로필 이미지'}
                    width={128}
                    height={128}
                    className="object-cover rounded-full border"
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
                href="/profile-client" 
                className="minimal-button"
              >
                클라이언트 버전 보기
              </Link>
            </div>
          </div>

          {/* Additional Settings or Info */}
          <div className="mt-8 border p-6">
            <h3 className="text-lg mb-4">계정 설정</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span>이메일 알림</span>
                <Link href="/settings/notifications" className="minimal-button text-sm">
                  설정
                </Link>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>보안 설정</span>
                <Link href="/settings/security" className="minimal-button text-sm">
                  관리
                </Link>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span>개인정보 설정</span>
                <Link href="/settings/privacy" className="minimal-button text-sm">
                  변경
                </Link>
              </div>
            </div>
          </div>

          {/* Server vs Client Comparison */}
          <div className="mt-8 p-4 border bg-gray-50">
            <p className="text-sm text-gray-600">
              이 페이지는 서버 컴포넌트로 구현되었습니다. 
              클라이언트 상태나 이벤트 핸들러가 필요 없는 경우 서버 컴포넌트를 사용하면 
              더 나은 성능을 얻을 수 있습니다.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 