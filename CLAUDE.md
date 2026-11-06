# React 스터디

React → API → Spring Boot → SQL 흐름을 직접 짜보며 익히는 학습 저장소입니다.
학습자는 안드로이드 개발 경험자입니다(Fragment/Bundle, ViewModel, Retrofit 등에 익숙).

## 지금까지의 맥락

- 학습자는 컴포넌트·Props, DOM과 React-DOM, Ref, Portal, 전역 스토어, 라우팅, REST와 GraphQL, Spring Boot, SQL 개념을 먼저 정리해 두었고, 이제 예제를 보고 직접 짜보며 익히는 단계입니다. State는 뒤 레슨에 꼭 필요해서 커리큘럼에 끼워 넣었습니다.
- PC가 꺼져 있어도, 폰에서도 공부할 수 있도록 이 저장소가 유일한 원본입니다. 학습자의 PC에는 작업 폴더가 없습니다.
- 학습자는 https://veryvermouth.github.io/react-study/ 로 폰에서 결과를 보고, Codespaces나 StackBlitz 같은 브라우저 환경에서 코드를 짜고, Claude 클라우드 세션에서 리뷰와 다음 레슨을 받습니다.
- 결과 화면은 main에 반영돼야 갱신됩니다. 작업 브랜치에 커밋했다면 main에 합치는 방법까지 안내합니다.
- Codespaces와 StackBlitz 링크는 넣어두었지만 실제로 열어본 적은 없습니다. 문제가 있다고 하면 그 부분부터 확인합니다.
- 세션을 처음 시작하면 `CURRICULUM.md`로 진행 상태를 확인하고 짧게 안내합니다.

## 코칭 규칙

- 답변은 항상 한국어로 합니다.
- 설명할 때는 안드로이드 비유를 함께 씁니다.
- **실습 정답을 대신 쓰지 않습니다.** `Exercise.jsx`는 학습자가 직접 채우는 파일이라 수정하지 말고, 리뷰와 단계별 힌트만 줍니다. 학습자가 정답을 명시적으로 요청하면 그때 보여줍니다.
- 학습자가 "N번 다 했어"라고 하면 해당 `Exercise.jsx`를 리뷰합니다. 통과하면 다음 레슨을 엽니다.

## 레슨 추가 방법

1. `src/lessons/NN-주제/Example.jsx`: 안드로이드 비교 주석이 달린 예제
2. `src/lessons/NN-주제/Exercise.jsx`: 목표 화면과 TODO, 보너스 과제가 있는 뼈대. 빈 상태로도 오류 없이 렌더링되어야 합니다.
3. `src/App.jsx`의 `lessons` 배열에 등록
4. `CURRICULUM.md`의 진행 상태 갱신

## 저장소 규칙

- **공개 저장소입니다.** 비밀번호, API 키, 토큰, 개인정보를 커밋하지 않습니다. 비밀값은 `.env`나 `application-local.yml`에 두고(`.gitignore` 처리됨), 필요하면 값이 빠진 `.env.example`만 커밋합니다.
- main에 푸시되면 GitHub Pages로 자동 배포됩니다(`.github/workflows/deploy.yml`). 배포 경로는 빌드 명령의 `--base`로 정하므로 `vite.config.js`에는 넣지 않습니다.
- 커밋 전에 `npm run build`가 통과하는지 확인합니다.
