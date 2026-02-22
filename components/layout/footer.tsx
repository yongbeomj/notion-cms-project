import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        {/* 푸터 컨텐츠 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* 브랜드 섹션 */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span className="text-2xl">🚀</span>
              <span>Starter Kit</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Next.js 모던 웹 스타터 킷. 모든 웹 프로젝트에서 반복적으로 필요한 컴포넌트와 레이아웃을 갖추고 있습니다.
            </p>
          </div>

          {/* 링크 섹션 */}
          <div className="space-y-4">
            <h3 className="font-semibold">리소스</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  문서
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  컴포넌트
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  사례
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 섹션 */}
          <div className="space-y-4">
            <h3 className="font-semibold">팔로우</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-foreground text-muted-foreground">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <Separator className="my-8" />

        {/* 저작권 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Starter Kit. 모든 권리 보유.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              개인정보 보호정책
            </Link>
            <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
