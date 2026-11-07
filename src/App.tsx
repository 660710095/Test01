import { useState, useEffect, FormEvent } from 'react'
import './App.css'

// ===================================================
// 🎯 แบบฝึกหัด: React Todo List
// ===================================================
// เติม code ในส่วนที่มี TODO ให้ครบ
// เพื่อให้แอปทำงานได้ตามภาพตัวอย่าง
// ===================================================

// TODO 1: สร้าง Interface สำหรับ Todo
interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

// TODO 2: สร้าง Type สำหรับ Filter
type FilterType = 'all' | 'active' | 'completed'

function App() {
  // TODO 3: สร้าง State สำหรับเก็บรายการ todos
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  // TODO 4: สร้าง State สำหรับเก็บค่า input
  const [inputValue, setInputValue] = useState<string>('')

  // TODO 5: สร้าง State สำหรับเก็บ filter ปัจจุบัน
  const [filter, setFilter] = useState<FilterType>('all')

  // TODO 6: ใช้ useEffect เพื่อบันทึก todos ลง localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // TODO 7: สร้างฟังก์ชัน addTodo
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim() === '') return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    }

    setTodos([newTodo, ...todos])
    setInputValue('')
  }

  // TODO 8: สร้างฟังก์ชัน toggleTodo
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // TODO 9: สร้างฟังก์ชัน deleteTodo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // TODO 10: สร้างฟังก์ชัน clearCompleted
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // TODO 11: กรอง todos ตาม filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // TODO 12: นับจำนวน todo
  const completedCount = todos.filter(t => t.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="todo-container">
      <header className="todo-header">
        {/* TODO 13: เติมข้อความ header */}
        <h1>รายการสิ่งที่ต้องทำ</h1>
        <p className="subtitle">จัดการงานของคุณอย่างเป็นระบบ</p>
      </header>

      {/* TODO 14: สร้าง form สำหรับเพิ่ม todo */}
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="เพิ่มรายการใหม่..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          <span className="btn-icon">+</span>
          <span className="btn-text">เพิ่ม</span>
        </button>
      </form>

      {/* TODO 15: สร้างปุ่ม filter */}
      <div className="filter-tabs">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ทั้งหมด ({todos.length})
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          ยังไม่เสร็จ ({activeCount})
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          เสร็จแล้ว ({completedCount})
        </button>
      </div>

      {/* TODO 16: แสดงรายการ todos */}
      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <li className="empty-state">
            <div className="empty-icon">📝</div>
            <p>
              {/* TODO 17: แสดงข้อความตาม filter */}
              {filter === 'all' && 'ยังไม่มีรายการ เพิ่มรายการแรกของคุณเลย!'}
              {filter === 'active' && 'ไม่มีรายการที่ต้องทำ 🎉'}
              {filter === 'completed' && 'ยังไม่มีรายการที่เสร็จแล้ว'}
            </p>
          </li>
        ) : (
          // TODO 18: ใช้ map เพื่อแสดงแต่ละ todo
          filteredTodos.map((todo, index) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <label className="checkbox-container">
                {/* TODO 19: สร้าง checkbox สำหรับ toggle */}
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark"></span>
              </label>
              {/* TODO 20: แสดงข้อความของ todo */}
              <span className="todo-text">{todo.text}</span>
              {/* TODO 21: สร้างปุ่มลบ */}
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
                aria-label="ลบรายการ"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </li>
          ))
        )}
      </ul>

      {/* TODO 22: แสดงปุ่ม clear completed */}
      {completedCount > 0 && (
        <div className="todo-footer">
          <button className="clear-btn" onClick={clearCompleted}>
            ล้างรายการที่เสร็จแล้ว ({completedCount})
          </button>
        </div>
      )}
    </div>
  )
}

export default App
