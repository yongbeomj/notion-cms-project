import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Palette, Accessibility, Smartphone, Gauge, Shield } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '즉시 사용 가능',
    description: 'Tier 0~6의 계층적 컴포넌트로 초기 세팅 시간을 최소화하세요.',
  },
  {
    icon: Palette,
    title: '완벽한 다크모드',
    description: 'next-themes로 구현된 시스템 자동감지 다크모드 지원.',
  },
  {
    icon: Accessibility,
    title: 'A11y 준수',
    description: 'Radix UI 기반 shadcn/ui로 WAI-ARIA 접근성 기준 준수.',
  },
  {
    icon: Smartphone,
    title: '완벽한 반응형',
    description: '모바일 우선 설계로 모든 디바이스에서 최적화된 경험 제공.',
  },
  {
    icon: Gauge,
    title: '고성능',
    description: 'Next.js 16의 App Router와 서버 컴포넌트로 최고 성능 달성.',
  },
  {
    icon: Shield,
    title: '타입 안전',
    description: 'TypeScript와 Zod로 런타임 안전성과 유효성 검증 보장.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            주요 기능
          </h2>
          <p className="text-muted-foreground text-lg">
            이 스타터 킷이 제공하는 모든 기능을 확인해보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
