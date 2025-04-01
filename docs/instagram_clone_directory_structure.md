# 인스타그램 클론 프로젝트 디렉토리 구조 가이드

## 프로젝트 개요
이 문서는 React를 사용한 인스타그램 클론 프로젝트의 디렉토리 구조와 각 파일 및 폴더의 역할을 설명합니다
## 루트 디렉토리 구조
```
instagram-clone/
├── public/               # 정적 파일 저장 디렉토리
├── src/                  # 소스 코드 디렉토리
├── .gitignore            # Git 무시 파일 목록
├── package.json          # 프로젝트 의존성 및 스크립트
└── README.md             # 프로젝트 설명 문서
```

## Public 디렉토리
```
public/
├── index.html            # 메인 HTML 파일
├── favicon.ico           # 웹사이트 아이콘
└── ...                   # 기타 정적 자산
```

- **index.html**: React 앱의 진입점이 되는 HTML 파일입니다. `<div id="root"></div>` 요소에 React 컴포넌트가 렌더링됩니다.
- **favicon.ico**: 브라우저 탭에 표시되는 웹사이트 아이콘입니다.

## Src 디렉토리
```
src/
├── assets/               # 이미지, 폰트 등 자산 파일
│   └── images/           # 이미지 파일 모음
│
├── components/           # 재사용 가능한 UI 컴포넌트
│   ├── Header/           # 상단 네비게이션 바 컴포넌트
│   │   ├── Header.js     # 헤더 로직 및 구조
│   │   └── Header.css    # 헤더 스타일
│   │
│   ├── Post/             # 게시물 컴포넌트
│   │   ├── Post.js       # 게시물 로직 및 구조
│   │   └── Post.css      # 게시물 스타일
│   │
│   ├── Stories/          # 스토리 기능 컴포넌트
│   │   ├── Stories.js    # 스토리 로직 및 구조
│   │   └── Stories.css   # 스토리 스타일
│   │
│   └── Suggestions/      # 추천 사용자 컴포넌트
│       ├── Suggestions.js # 추천 로직 및 구조
│       └── Suggestions.css # 추천 스타일
│
├── context/              # React Context API 파일
│   └── AuthContext.js    # 인증 관련 Context 관리
│
├── firebase/             # Firebase 설정 및 유틸리티
│   └── config.js         # Firebase 연결 설정
│
├── hooks/                # 커스텀 React Hooks
│   ├── useAuth.js        # 인증 관련 커스텀 훅
│   └── useFirestore.js   # Firestore 데이터 액세스 훅
│
├── pages/                # 페이지 컴포넌트
│   ├── Auth/             # 인증 관련 페이지
│   │   ├── Login.js      # 로그인 페이지
│   │   └── Register.js   # 회원가입 페이지
│   │
│   ├── Explore/          # 탐색 페이지
│   │   └── Explore.js    # 탐색 기능 구현
│   │
│   ├── Home/             # 홈 피드 페이지
│   │   ├── Home.js       # 홈 피드 로직 및 구조
│   │   └── Home.css      # 홈 피드 스타일
│   │
│   ├── NotFound/         # 404 페이지
│   │   └── NotFound.js   # 페이지를 찾을 수 없을 때 표시
│   │
│   └── Profile/          # 사용자 프로필 페이지
│       ├── Profile.js    # 프로필 로직 및 구조
│       └── Profile.css   # 프로필 스타일
│
├── utils/                # 유틸리티 함수
│   └── formatters.js     # 날짜, 숫자 등 포맷팅 함수
│
├── App.js                # 메인 앱 컴포넌트 및 라우팅
├── App.css               # 전역 스타일
├── index.js              # React 앱 진입점
└── index.css             # 전역 CSS 재설정 및 기본 스타일
```

## 주요 파일 및 폴더 설명

### Components 폴더
재사용 가능한 UI 컴포넌트들을 담고 있습니다.

- **Header**: 앱 상단 네비게이션 바를 포함합니다. 로고, 검색창, 메뉴 아이콘을 표시합니다.
  - `Header.js`: 네비게이션 로직, 사용자 상태에 따른 조건부 렌더링
  - `Header.css`: 헤더 스타일링

- **Post**: 인스타그램 게시물을 표시하는 컴포넌트입니다.
  - `Post.js`: 게시물 이미지, 좋아요, 댓글 등의 기능 구현
  - `Post.css`: 게시물 카드 스타일링

- **Stories**: 상단에 표시되는 스토리 기능을 구현합니다.
  - `Stories.js`: 스토리 표시 및 내비게이션 로직
  - `Stories.css`: 스토리 원형 아이콘 및 애니메이션

- **Suggestions**: 사용자에게 추천되는 계정 목록을 표시합니다.
  - `Suggestions.js`: 추천 알고리즘 및 UI 구현
  - `Suggestions.css`: 추천 목록 스타일링

### Context 폴더
전역 상태 관리를 위한 React Context API 파일들이 있습니다.

- **AuthContext.js**: 사용자 인증 상태를 관리합니다. 로그인, 로그아웃, 현재 사용자 정보를 전역적으로 제공합니다.

### Firebase 폴더
Firebase 서비스 초기화 및 구성 파일을 포함합니다.

- **config.js**: Firebase 프로젝트 설정, Firestore, Authentication, Storage 서비스 초기화 코드를 포함합니다.

### Hooks 폴더
커스텀 React Hooks를 포함하여 로직을 재사용합니다.

- **useAuth.js**: 인증 관련 로직을 캡슐화하는 훅으로, 로그인/로그아웃 상태 및 사용자 정보에 접근합니다.
- **useFirestore.js**: Firestore 데이터베이스 작업을 단순화하는 훅으로, 게시물, 댓글 등의 CRUD 작업을 추상화합니다.

### Pages 폴더
애플리케이션의 각 페이지를 나타내는 컴포넌트들이 있습니다.

- **Auth**: 인증 관련 페이지를 포함합니다.
  - `Login.js`: 로그인 양식 및 로직
  - `Register.js`: 회원가입 양식 및 로직

- **Explore**: 새로운 콘텐츠를 탐색하는 페이지입니다.
  - `Explore.js`: 추천 게시물, 해시태그 등 탐색 기능

- **Home**: 메인 피드 페이지입니다.
  - `Home.js`: 팔로우한 계정의 게시물을 시간순으로 표시
  - `Home.css`: 피드 레이아웃 스타일

- **NotFound**: 404 오류 페이지입니다.
  - `NotFound.js`: 사용자가 존재하지 않는 URL에 접근했을 때 표시되는 페이지

- **Profile**: 사용자 프로필 페이지입니다.
  - `Profile.js`: 사용자 정보, 게시물 그리드, 팔로워/팔로잉 통계 등 표시
  - `Profile.css`: 프로필 레이아웃 스타일

### Utils 폴더
유틸리티 함수들을 포함합니다.

- **formatters.js**: 날짜, 시간, 숫자 등을 포맷팅하는 함수들이 있습니다. 예: "5분 전", "1,234 좋아요" 등의 형식 변환

### 루트 파일
- **App.js**: 라우팅 설정 및 전체 앱 구조를 정의합니다.
- **App.css**: 전역적으로 적용되는 스타일을 포함합니다.
- **index.js**: React 앱의 진입점으로, React DOM에 앱을 렌더링합니다.
- **index.css**: 브라우저 기본 스타일을 재설정하고 기본 폰트, 색상 등을 설정합니다.

## 폴더 구성 원칙
- **관심사 분리**: UI 컴포넌트, 페이지, 비즈니스 로직, 상태 관리 등을 분리하여 코드 유지보수성 향상
- **재사용성**: 여러 페이지에서 사용되는 컴포넌트를 분리하여 중복 코드 방지
- **모듈성**: 각 폴더와 파일이 독립적인 기능을 담당하여 확장성과 테스트 용이성 확보

## 추가 폴더 (필요에 따라 확장)
- **services/**: API 호출 및 비즈니스 로직 관련 파일
- **reducers/**: Redux 또는 useReducer를 사용할 경우 리듀서 파일
- **types/**: TypeScript 타입 정의 파일
- **tests/**: 테스트 파일
- **constants/**: 상수 값 정의 파일

## 스타일링 접근 방식
각 컴포넌트는 자체 CSS 파일을 가지고 있으며, 스타일드 컴포넌트나 CSS 모듈로 대체할 수도 있습니다. 이는 스타일의 격리와 컴포넌트의 자율성을 보장합니다.