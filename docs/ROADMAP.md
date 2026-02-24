# 노션 기반 견적서 관리 시스템 — 개발 로드맵

> **기준 문서**: [PRD v1.0](./PRD.md)
> **기술 스택**: Next.js 15.5.3 · TypeScript · TailwindCSS v4 · shadcn/ui · Notion API · @react-pdf/renderer
> **작성일**: 2026-02-24

---

## Phase 1: 프로젝트 초기 설정 (골격 구축)

> **예상 소요 시간**: 1일

### 목표
모든 기능 개발의 기반이 되는 프로젝트 골격을 구축한다. 잘못된 초기 설정은 나중에 수정 비용이 크므로, 이 단계를 탄탄히 완료해야 한다.

### 작업 목록

- [ ] Next.js 15.5.3 + TypeScript 프로젝트 생성 (App Router 활성화)
- [ ] TailwindCSS v4 설치 및 설정
- [ ] shadcn/ui 초기화 및 기본 컴포넌트 설치
- [ ] ESLint / Prettier 설정
- [ ] 폴더 구조 설계 (App Router 기반)
  ```
  src/
  ├── app/
  │   ├── invoice/[id]/    # 견적서 조회 페이지 (F002)
  │   ├── api/
  │   │   └── generate-pdf/ # PDF 생성 API (F003)
  │   ├── not-found.tsx    # 404 페이지 (F011)
  │   └── layout.tsx
  ├── components/          # 공통 UI 컴포넌트
  ├── lib/                 # 유틸리티 및 외부 API 클라이언트
  └── types/               # TypeScript 타입 정의
  ```
- [ ] 환경 변수 구성 (`.env.local`)
  ```env
  NOTION_API_KEY=secret_xxxxxxxxxxxxx
  NOTION_DATABASE_ID=xxxxxxxxxxxxx
  ```
- [ ] Notion Integration 생성 및 데이터베이스 연결 확인

### 완료 기준
- `npm run dev` 정상 실행
- 환경 변수 로드 확인 (`process.env.NOTION_API_KEY` 접근 가능)

---

## Phase 2: 공통 모듈 / 컴포넌트 개발

> **예상 소요 시간**: 1일

### 목표
핵심 기능 개발 전에 공통 모듈을 먼저 완성하여 중복 코드를 방지하고 일관성을 유지한다.

### 작업 목록

- [ ] **`lib/notion.ts`** — Notion API 클라이언트 및 데이터 조회 함수
  - `getInvoice(pageId: string)` — 특정 견적서 페이지 조회
  - `getInvoiceItems(invoiceId: string)` — 연결된 견적 항목 조회
- [ ] **`types/invoice.ts`** — TypeScript 타입 정의
  ```typescript
  interface Invoice {
    id: string
    invoiceNumber: string
    clientName: string
    issueDate: string
    validUntil: string
    status: 'pending' | 'approved' | 'rejected'
    totalAmount: number
    items: InvoiceItem[]
  }

  interface InvoiceItem {
    id: string
    description: string
    quantity: number
    unitPrice: number
    amount: number
  }
  ```
- [ ] **공통 UI 컴포넌트**
  - `LoadingSpinner` — 데이터 로딩 중 표시
  - `ErrorMessage` — 에러 메시지 표시
  - `Layout` — 전체 페이지 레이아웃 래퍼
- [ ] 환경 변수 유효성 검사 유틸 (`lib/env.ts`)

### 완료 기준
- Notion API 호출 성공 (실제 데이터 반환 확인)
- 타입 정의 완료 및 컴파일 오류 없음

---

## Phase 3: 핵심 기능 개발 (MVP)

> **예상 소요 시간**: 3~4일
> **관련 기능**: F001, F002, F003, F011, F012

### 목표
PRD에 정의된 MVP 핵심 기능을 순차적으로 구현한다.

### 작업 목록

#### F001 + F002: Notion API 연동 및 견적서 조회 페이지
- [ ] `app/invoice/[id]/page.tsx` — Server Component로 Notion 데이터 조회
- [ ] 견적서 정보 렌더링 (발행일, 유효기간, 항목별 금액, 총액)
- [ ] 고유 URL 구조 구현: `/invoice/[notionPageId]`

#### F003: PDF 다운로드
- [ ] `@react-pdf/renderer` 설치
- [ ] `components/InvoicePDF.tsx` — PDF용 React 컴포넌트 설계
- [ ] `app/api/generate-pdf/route.ts` — PDF 생성 API Route 구현
- [ ] 견적서 조회 페이지에 "PDF 다운로드" 버튼 연결

#### F011: 404 에러 처리
- [ ] `app/not-found.tsx` — 글로벌 404 페이지
- [ ] 잘못된 견적서 ID 접근 시 적절한 에러 메시지 표시
  - "견적서를 찾을 수 없습니다"
  - 발행자에게 올바른 링크 요청 안내

#### F012: 반응형 레이아웃
- [ ] 모바일 / 태블릿 / 데스크톱 대응 (TailwindCSS 반응형 유틸리티 활용)
- [ ] 전체 페이지 반응형 검증

### 완료 기준 (MVP 성공 기준 5개 항목)
1. ✅ Notion 데이터베이스에서 견적서 정보를 정상적으로 가져옴
2. ✅ 고유 URL로 접근 시 견적서가 웹에서 정확하게 표시됨
3. ✅ PDF 다운로드 버튼 클릭 시 견적서가 PDF로 다운로드됨
4. ✅ 모바일/태블릿/데스크톱에서 정상 작동
5. ✅ 잘못된 URL 접근 시 적절한 에러 메시지 표시

---

## Phase 4: 추가 기능 개발 (MVP 이후)

> **예상 소요 시간**: 미정 (사용자 피드백 기반으로 우선순위 결정)

### Phase 4-A: 관리 기능
- 관리자 대시보드 (발행한 견적서 목록 조회)
- 견적서 상태 관리 (승인/거절 추적)
- 견적서 검색 및 필터링

### Phase 4-B: 자동화
- 이메일 자동 발송 (SendGrid / Resend 연동)
- 견적서 만료 알림
- 클라이언트 응답 트래킹

### Phase 4-C: 고급 기능
- 다중 템플릿 지원
- 다국어 견적서 (한국어/영어 등)
- 전자 서명 기능
- 견적서 버전 관리 및 히스토리

---

## Phase 5: 최적화 및 배포

> **예상 소요 시간**: 1일

### 목표
기능이 완성된 이후 최적화와 배포를 순서대로 진행한다.

### 작업 목록

- [ ] Next.js 성능 최적화
  - ISR(Incremental Static Regeneration) 또는 캐싱 전략 적용
  - 이미지 최적화 (`next/image`)
- [ ] Vercel 배포
  - 환경 변수 (`NOTION_API_KEY`, `NOTION_DATABASE_ID`) Vercel Dashboard에 등록
  - 프로덕션 빌드 오류 확인
- [ ] 도메인 연결 (선택 사항)
- [ ] 모니터링 / 에러 추적 설정 (선택 사항: Sentry 등)

### 완료 기준
- Vercel 배포 성공
- 프로덕션 URL에서 전체 기능 (F001~F003, F011, F012) 정상 동작

---

## 전체 일정 요약

| Phase | 내용                      | 예상 기간 |
| ----- | ------------------------- | --------- |
| 1     | 프로젝트 초기 설정        | 1일       |
| 2     | 공통 모듈 / 컴포넌트 개발 | 1일       |
| 3     | 핵심 기능 개발 (MVP)      | 3~4일     |
| 4     | 추가 기능 개발            | 미정      |
| 5     | 최적화 및 배포            | 1일       |

> **MVP 목표 기간**: Phase 1~3 완료 기준 약 5~6일

---

**📝 문서 버전**: v1.0
**📅 작성일**: 2026-02-24
**🔗 참고 문서**: [PRD.md](./PRD.md)
