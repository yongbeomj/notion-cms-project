---
description: '컴포넌트 이름을 받아서 src/components 폴더에 새 React 컴포넌트를 생성합니다'
argument-hint: '<컴포넌트명>'
allowed-tools:
  [
    'Bash(mkdir:*)',
    'Write(*)',
  ]
---

# Claude 명령어: Add Component

새 React 함수형 컴포넌트를 생성합니다.

## 사용법

```
/add-component MyComponent
```

## 작동 방식

1. 컴포넌트 이름을 인자로 받음
2. src/components 디렉토리 생성 (필요시)
3. 컴포넌트명.tsx 파일 생성
4. TypeScript + React 함수형 컴포넌트 템플릿 추가
5. Tailwind CSS 스타일 예시 포함

## 생성 구조

```
src/components/
└── ComponentName.tsx
```

## 템플릿 예시

생성되는 컴포넌트는 다음과 같은 구조를 갖습니다:

```typescript
'use client';

import React from 'react';

interface ComponentNameProps {
  // props 타입 정의
}

export default function ComponentName(
  {}: ComponentNameProps
): React.ReactElement {
  return (
    <div className="flex items-center justify-center">
      <p className="text-lg font-medium text-gray-900">
        ComponentName
      </p>
    </div>
  );
}
```

## 사용 예시

- `/add-component Button` → src/components/Button.tsx
- `/add-component Card` → src/components/Card.tsx
- `/add-component Header` → src/components/Header.tsx
