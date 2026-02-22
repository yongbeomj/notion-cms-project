import { ComponentShowcase } from '@/components/sections/component-showcase'
import { PageHeader } from '@/components/common/page-header'

export default function ShowcasePage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-6 py-8">
      <PageHeader
        title="컴포넌트 예제"
        description="포함된 컴포넌트의 실제 사용 예시를 확인하고 복사해서 사용하세요."
        breadcrumbs={[
          { label: '홈', href: '/' },
          { label: '예제' },
        ]}
      />
      <div className="mt-8">
        <ComponentShowcase />
      </div>
    </div>
  )
}
