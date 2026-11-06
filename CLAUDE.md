# React 스터디

React → API → Spring Boot → SQL 흐름을 직접 짜보며 익히는 학습 저장소입니다.
학습자는 안드로이드 개발 경험자입니다(Fragment/Bundle, ViewModel, Retrofit 등에 익숙).

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
