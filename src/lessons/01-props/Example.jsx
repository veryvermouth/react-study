// ─────────────────────────────────────────────────────────────
// 레슨 1 예제: 컴포넌트 & Props
//
// 안드로이드라면:
//   val f = ProfileFragment().apply {
//     arguments = bundleOf("name" to "민지", "role" to "Android Dev")
//   }
//   // Fragment 안에서: requireArguments().getString("name")
//
// 리액트에서는:
//   <ProfileCard name="민지" role="Android Dev" />
//   // 컴포넌트 안에서: function ProfileCard({ name, role }) { ... }
//
// 핵심 3가지
//   1) 컴포넌트 = JSX(화면)를 return 하는 "함수". 이름은 대문자로 시작.
//   2) props = 부모가 자식에게 넘기는 객체. Bundle처럼 key-value.
//   3) props는 읽기 전용. 자식이 고치면 안 됨 (바꾸고 싶으면 부모가 새 값을 내려줌).
// ─────────────────────────────────────────────────────────────

// 자식 컴포넌트: props를 구조 분해로 받는다.
// `isOnline = false` 처럼 기본값을 줄 수 있다 → getBoolean("isOnline", false)와 같은 느낌.
function ProfileCard({ name, role, skills, isOnline = false }) {
  // ❌ 이렇게 하면 안 됨: name = name + '님'
  //    props는 부모 소유. 자식은 받기만 한다.

  return (
    <div className="card">
      <h3>
        {/* JSX 안에서 JS 값을 쓰려면 { } */}
        {name} {isOnline ? '🟢' : '⚪'}
      </h3>
      <p>{role}</p>

      {/* 배열 → 화면 목록: map 사용. RecyclerView의 아이템처럼 key로 각 항목을 구분한다 */}
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

// children: 태그 "사이"에 넣은 내용도 props로 들어온다 (props.children).
// 안쪽 내용은 모른 채 테두리만 담당하는 컨테이너를 만들 때 쓴다.
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

// 부모 컴포넌트: 데이터를 들고 있다가 자식에게 props로 내려준다.
export default function Example() {
  const team = [
    { id: 1, name: '민지', role: 'Android Dev', skills: ['Kotlin', 'Jetpack'], isOnline: true },
    { id: 2, name: '준호', role: 'Backend Dev', skills: ['Java', 'Spring Boot', 'SQL'] },
  ]

  return (
    <Section title="우리 팀">
      {team.map((member) => (
        // 객체를 펼쳐서 넘기는 문법: {...member}
        // name={member.name} role={member.role} ... 를 한 번에 쓴 것과 같다
        <ProfileCard key={member.id} {...member} />
      ))}
      {/* 숫자·불리언·배열 같은 JS 값은 { }로 감싸서 넘긴다. 문자열만 "" 가능 */}
      <ProfileCard name="나" role="React 입문" skills={['JSX', 'Props']} isOnline={true} />
    </Section>
  )
}
