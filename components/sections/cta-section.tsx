import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-r from-primary/5 to-primary/10 border-t">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            지금 시작하세요
          </h2>

          <p className="text-lg text-muted-foreground">
            이 스타터 킷으로 당신의 다음 프로젝트를 빠르게 시작하세요.
            <br />
            모든 필수 컴포넌트가 이미 준비되어 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="px-8" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub에서 보기
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link href="#features">
                문서 읽기
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-6">
            MIT 라이선스 · 자유롭게 사용, 수정, 배포하세요.
          </p>
        </div>
      </div>
    </section>
  )
}
