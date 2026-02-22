# Product Requirements Document (PRD)
## 개인 개발 블로그 - Notion CMS 연동 프로젝트

---

## 1. 프로젝트 개요

### 1.1 프로젝트명
**개인 개발 블로그**

### 1.2 프로젝트 목적
Notion을 CMS(Content Management System)로 활용하여 개인 기술 블로그를 구축합니다. Notion에서 글을 작성하면 자동으로 블로그에 반영되는 시스템을 통해 콘텐츠 관리의 편의성을 극대화합니다.

### 1.3 주요 가치
- **효율적인 콘텐츠 관리**: Notion 데이터베이스에서 직접 글 관리
- **자동화**: API를 통한 데이터 동기화로 수동 관리 최소화
- **접근성**: 개발자 아닌 누구나 Notion으로 쉽게 콘텐츠 작성 가능
- **유지보수성**: 데이터베이스 중심의 확장 가능한 구조

### 1.4 CMS 선택 이유
- Notion은 구조화된 데이터베이스와 Rich Text Content를 함께 지원
- 공식 API를 통한 안정적인 데이터 접근 가능
- 별도의 CMS 구축 비용 절감
- 블로그 외 다양한 용도로 확장 가능

---

## 2. 주요 기능

### 2.1 핵심 기능
1. **Notion 데이터베이스 연동**: Notion API를 통한 글 데이터 동기화
2. **블로그 글 목록**: 최근 글부터 최신순으로 표시
3. **개별 글 상세 페이지**: 클릭한 글의 전체 내용 표시
4. **카테고리별 필터링**: 특정 카테고리의 글만 조회
5. **검색 기능**: 제목 및 태그를 기반으로 글 검색
6. **반응형 디자인**: 모바일, 태블릿, 데스크톱에서 최적화된 UI

### 2.2 기능 우선순위 (MVP)
| 순위 | 기능 | 우선순위 |
|------|------|---------|
| 1 | Notion API 연동 | 필수 |
| 2 | 글 목록 페이지 | 필수 |
| 3 | 글 상세 페이지 | 필수 |
| 4 | 기본 스타일링 | 필수 |
| 5 | 반응형 디자인 | 필수 |
| 6 | 카테고리 필터링 | 중요 |
| 7 | 검색 기능 | 중요 |
| 8 | 고급 UI/UX | 옵션 |

---

## 3. 기술 스택

### 3.1 Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Icons**: Lucide React

### 3.2 Backend/CMS
- **CMS**: Notion API
- **Package**: @notionhq/client

### 3.3 배포
- **Hosting**: Vercel
- **Environment**: Production & Development

### 3.4 개발 환경
- **Node.js**: v18 이상
- **Package Manager**: npm/yarn/bun
- **Git**: Version Control

---

## 4. Notion 데이터베이스 구조

### 4.1 데이터베이스 스키마

| 필드명 | 필드 타입 | 설명 | 예시 |
|--------|----------|------|------|
| Title | title | 블로그 글 제목 | "Next.js 15 주요 기능" |
| Category | select | 글의 카테고리 | ["Frontend", "Backend", "DevOps"] |
| Tags | multi_select | 세부 태그 | ["Next.js", "React", "TypeScript"] |
| Published | date | 글 발행일 | 2026-02-22 |
| Status | select | 글의 상태 | ["초안", "발행됨"] |
| Content | page content | 글의 본문 내용 | (Notion 페이지 콘텐츠) |

### 4.2 데이터베이스 생성 체크리스트
- [ ] Notion Workspace에서 새 데이터베이스 생성
- [ ] 위의 필드 구조에 맞게 설정
- [ ] 예시 데이터 3-5개 입력
- [ ] Integration 생성 및 API 토큰 발급
- [ ] Database ID 확인

---

## 5. 화면 구성 (UI/UX)

### 5.1 주요 페이지

#### 5.1.1 홈 페이지 (/)
- **목적**: 최근 발행된 글 목록 표시
- **주요 요소**:
  - 프로젝트 소개 (헤더)
  - 글 목록 (카드 형태)
  - 페이지네이션 또는 무한 스크롤
  - 필터링 사이드바 (선택사항)
- **디자인**: 깔끔하고 읽기 쉬운 레이아웃

#### 5.1.2 글 상세 페이지 (/posts/[id])
- **목적**: 선택한 글의 전체 내용 표시
- **주요 요소**:
  - 글 제목, 메타 정보 (작성일, 카테고리, 태그)
  - Notion 콘텐츠 렌더링
  - 관련 글 추천
  - 목차 (선택사항)
- **디자인**: 긴 글을 편하게 읽을 수 있는 폰트 크기와 라인 높이

#### 5.1.3 카테고리 페이지 (/category/[category])
- **목적**: 특정 카테고리의 글 목록 표시
- **주요 요소**:
  - 선택된 카테고리 표시
  - 카테고리 내 글 목록
  - 다른 카테고리로 이동 가능
- **디자인**: 홈 페이지와 동일한 카드 레이아웃

### 5.2 공통 UI 컴포넌트
- Navigation Bar (로고, 메뉴)
- Footer (정보, 링크)
- 글 카드 (제목, 미리보기, 메타 정보)
- 검색 바
- 카테고리 태그

---

## 6. MVP (Minimum Viable Product) 범위

### 6.1 포함 사항
- [x] Notion API 연동 및 데이터 조회
- [x] 글 목록 페이지 (/ 경로)
- [x] 글 상세 페이지 (/posts/[id] 경로)
- [x] 기본 스타일링 (Tailwind CSS + shadcn/ui)
- [x] 반응형 디자인 (모바일/태블릿/데스크톱)
- [x] Notion 콘텐츠 렌더링 (텍스트, 제목, 리스트 등)

### 6.2 미포함 사항 (향후 개선)
- [ ] 검색 기능 (전체 텍스트 검색)
- [ ] 카테고리별 필터링 페이지
- [ ] 태그 클라우드
- [ ] 댓글 기능
- [ ] 조회수 추적
- [ ] 소셜 공유 기능

---

## 7. 구현 단계

### Phase 1: 기초 설정 (Week 1)
**목표**: Notion API 연동 및 프로젝트 초기화

- [ ] Next.js 15 프로젝트 생성
- [ ] TypeScript 및 Tailwind CSS 설정
- [ ] @notionhq/client 패키지 설치
- [ ] 환경 변수 설정 (NOTION_API_TOKEN, NOTION_DATABASE_ID)
- [ ] Notion API 기본 쿼리 함수 작성
- [ ] Git Repository 초기화

**산출물**: 기본 프로젝트 구조, API 연동 테스트

### Phase 2: 글 목록 페이지 (Week 2)
**목표**: 홈 페이지에 Notion 데이터 표시

- [ ] 글 목록 조회 API 구현
- [ ] 글 카드 컴포넌트 제작
- [ ] 홈 페이지 레이아웃 작성
- [ ] 메타 데이터 표시 (제목, 날짜, 카테고리, 태그)
- [ ] 페이지네이션 또는 무한 스크롤 구현
- [ ] 반응형 디자인 적용

**산출물**: 동작하는 홈 페이지

### Phase 3: 글 상세 페이지 (Week 3)
**목표**: 개별 글의 전체 내용 표시

- [ ] 동적 라우팅 설정 (/posts/[id])
- [ ] 글 상세 조회 API 구현
- [ ] Notion 블록 렌더러 구현 (paragraph, heading, list, image 등)
- [ ] 글 상세 페이지 레이아웃 작성
- [ ] 메타 정보 헤더 (제목, 날짜, 카테고리, 태그)
- [ ] 관련 글 추천 기능 (선택사항)

**산출물**: 완전한 글 상세 페이지

### Phase 4: 스타일링 및 최적화 (Week 4)
**목표**: UI/UX 개선 및 성능 최적화

- [ ] shadcn/ui 컴포넌트 적용
- [ ] 전역 스타일 정리
- [ ] Dark Mode 지원 (선택사항)
- [ ] 이미지 최적화
- [ ] 성능 측정 (Lighthouse)
- [ ] SEO 최적화 (메타 태그, og 이미지)
- [ ] 로딩 상태 처리

**산출물**: 최적화된 최종 프로덕트

### Phase 5: 배포 (Week 5)
**목표**: Vercel에 프로덕트 배포

- [ ] Vercel 프로젝트 설정
- [ ] 환경 변수 설정 (Production)
- [ ] GitHub 연동 및 CI/CD 구성
- [ ] 배포 테스트
- [ ] 도메인 설정 (선택사항)
- [ ] 모니터링 설정

**산출물**: Production 배포 완료

---

## 8. 개발 가이드

### 8.1 환경 변수 설정
```
NOTION_API_TOKEN=your_api_token_here
NOTION_DATABASE_ID=your_database_id_here
```

### 8.2 프로젝트 구조
```
notion-cms-project/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈 페이지
│   └── posts/
│       └── [id]/
│           └── page.tsx     # 글 상세 페이지
├── components/              # React 컴포넌트
│   ├── ArticleCard.tsx
│   ├── ArticleList.tsx
│   ├── Header.tsx
│   └── Footer.tsx
├── lib/                      # 유틸리티 함수
│   └── notion.ts            # Notion API 함수
├── types/                    # TypeScript 타입 정의
│   └── index.ts
├── docs/                     # 문서
│   └── PRD.md
└── .env.local              # 환경 변수
```

### 8.3 개발 명령어
```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start

# 타입 체크
npm run type-check

# 린트
npm run lint
```

---

## 9. 성공 기준

### 9.1 기능 완성도
- [x] Notion API에서 글 목록 정상 조회
- [x] 글 상세 페이지에서 Notion 콘텐츠 정상 렌더링
- [x] 모든 주요 페이지가 반응형으로 작동
- [x] 로딩 상태가 명확하게 표시

### 9.2 성능
- [x] Lighthouse 점수 75점 이상
- [x] 페이지 로드 시간 3초 이하
- [x] 이미지 최적화 완료

### 9.3 사용성
- [x] 모바일에서도 쉽게 네비게이션 가능
- [x] 검색과 필터링이 직관적
- [x] 글 읽기가 편함 (폰트, 라인 높이, 색상)

---

## 10. 향후 개선 계획

### 10.1 Phase 2 (MVP 이후)
- 검색 기능 (전체 텍스트 검색)
- 카테고리별 페이지 (/category/[name])
- 태그 클라우드
- Dark Mode
- 코드 하이라이팅 개선

### 10.2 Phase 3
- 댓글 시스템 (utterances 또는 Disqus)
- RSS Feed
- 글 추천 알고리즘
- 뉘스레터 구독

### 10.3 Phase 4
- 조회수 추적 (Analytics)
- 관리자 대시보드
- 성능 분석 및 최적화
- A/B 테스팅

---

## 11. 리소스 및 참고 자료

### 11.1 공식 문서
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Notion API 공식 문서](https://developers.notion.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)

### 11.2 Notion API 활용
- Notion 데이터베이스 쿼리 방법
- 블록 렌더링 최적화
- 캐싱 전략

### 11.3 성능 최적화
- Image Optimization
- Code Splitting
- Cache Strategy
- SEO 최적화

---

## 12. 변경 이력

| 날짜 | 변경 사항 | 작성자 |
|------|----------|--------|
| 2026-02-22 | 초판 작성 | Development Team |

---

**문서 최종 업데이트**: 2026-02-22
