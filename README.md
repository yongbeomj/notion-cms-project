# 개인 개발 블로그 - Notion CMS 연동 프로젝트

Notion을 CMS(Content Management System)로 활용한 개인 기술 블로그입니다. Notion 데이터베이스에서 글을 작성하면 자동으로 블로그에 반영됩니다.

## 🎯 프로젝트 개요

- **프로젝트명**: 개인 개발 블로그
- **목적**: Notion CMS를 통한 효율적인 기술 블로그 운영
- **특징**: Notion API를 활용한 자동 데이터 동기화

## ✨ 주요 기능

- 📚 Notion 데이터베이스에서 블로그 글 목록 가져오기
- 📄 개별 글 상세 페이지 표시
- 🏷️ 카테고리별 필터링
- 🔍 검색 기능
- 📱 반응형 디자인 (모바일/태블릿/데스크톱)

## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

### Backend/CMS
- **CMS**: Notion API
- **Client**: @notionhq/client

### Deployment
- **Hosting**: Vercel

## 📋 Notion 데이터베이스 구조

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | title | 블로그 글 제목 |
| Category | select | 글의 카테고리 |
| Tags | multi_select | 세부 태그 |
| Published | date | 글 발행일 |
| Status | select | 상태 (초안/발행됨) |
| Content | page content | 글의 본문 |

## 🚀 시작하기

### 1. 환경 설정

```bash
# 패키지 설치
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음을 추가하세요:

```
NOTION_API_TOKEN=your_api_token_here
NOTION_DATABASE_ID=your_database_id_here
```

#### Notion API 토큰 발급 방법:
1. [Notion Developers](https://www.notion.com/my-integrations) 방문
2. "New integration" 클릭
3. 생성된 토큰 복사

#### Database ID 확인 방법:
1. Notion에서 데이터베이스 열기
2. URL에서 `/database/` 다음 32자리가 Database ID

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 프로젝트를 확인할 수 있습니다.

### 4. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 📂 프로젝트 구조

```
notion-cms-project/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── posts/
│       └── [id]/
│           └── page.tsx   # 글 상세 페이지
├── components/            # React 컴포넌트
├── lib/                   # 유틸리티 함수
│   └── notion.ts          # Notion API 함수
├── types/                 # TypeScript 타입 정의
├── public/                # 정적 파일
├── docs/                  # 프로젝트 문서
│   └── PRD.md            # 상세 요구사항
└── .env.local            # 환경 변수 (커밋 제외)
```

## 📖 문서

자세한 프로젝트 요구사항과 구현 계획은 [PRD.md](./docs/PRD.md)를 참고하세요.

## 🎓 주요 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Notion API 공식 문서](https://developers.notion.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 📝 커밋 규칙

이 프로젝트는 Conventional Commits을 따릅니다:

- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 변경 (기능 변화 없음)
- `refactor`: 코드 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 의존성 등

예시: `feat: Notion API 연동 기능 추가`

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해주세요.
