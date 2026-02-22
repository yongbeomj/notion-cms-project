import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center space-y-8">
          {/* 배지 */}
          <div className="flex justify-center">
            <Badge variant="outline" className="px-3 py-1">
              ✨ Next.js 16 + React 19
            </Badge>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              모던 웹 개발을 위한
            </span>
            <br />
            완벽한 스타터 킷
          </h1>

          {/* 설명 */}
          <p className="text-xl text-muted-foreground">
            Next.js 16, React 19, Tailwind CSS v4, shadcn/ui로 구축된 프로덕션 준비 완료 스타터.
            <br />
            모든 웹 프로젝트에서 반복적으로 필요한 컴포넌트가 이미 준비되어 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8" asChild>
              <Link href="/showcase">
                시작하기
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link href="#features">
                더 알아보기
              </Link>
            </Button>
          </div>

          {/* 기술 스택 배지 */}
          <div className="pt-8 border-t">
            <p className="text-sm text-muted-foreground mb-4">
              포함된 기술:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'Zod'].map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
