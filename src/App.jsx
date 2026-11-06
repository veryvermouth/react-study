import { useState } from 'react'
import Lesson1Example from './lessons/01-props/Example.jsx'
import Lesson1Exercise from './lessons/01-props/Exercise.jsx'
import './App.css'

// 레슨이 늘어나면 여기에 한 줄씩 추가된다.
const lessons = [
  { id: 1, title: '1. 컴포넌트 & Props', Example: Lesson1Example, Exercise: Lesson1Exercise },
]

export default function App() {
  const [currentId, setCurrentId] = useState(lessons[lessons.length - 1].id)
  const lesson = lessons.find((l) => l.id === currentId)

  return (
    <div className="app">
      <nav className="tabs">
        {lessons.map((l) => (
          <button
            key={l.id}
            className={l.id === currentId ? 'active' : ''}
            onClick={() => setCurrentId(l.id)}
          >
            {l.title}
          </button>
        ))}
      </nav>

      <div className="panes">
        <div className="pane">
          <div className="pane-label">예제 (Example.jsx)</div>
          <lesson.Example />
        </div>
        <div className="pane">
          <div className="pane-label">내 실습 (Exercise.jsx)</div>
          <lesson.Exercise />
        </div>
      </div>
    </div>
  )
}
