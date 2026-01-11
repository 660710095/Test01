// ===================================================
// 🔑 เฉลย: React Todo List
// ===================================================
// ไฟล์นี้เป็นเฉลยสำหรับผู้สอน อย่าให้นักเรียนดู!
// ===================================================

import { useState, useEffect, FormEvent } from 'react'
import './App.css'

// TODO 1: เฉลย
interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

// TODO 2: เฉลย
type FilterType = 'all' | 'active' | 'completed'

function App() {
  // TODO 3: เฉลย - โหลดจาก localStorage
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  // TODO 4: เฉลย
  const [inputValue, setInputValue] = useState<string>('')

  // TODO 5: เฉลย
  const [filter, setFilter] = useState<FilterType>('all')

  // TODO 6: เฉลย
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // TODO 7: เฉลย
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

  // TODO 8: เฉลย
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // TODO 9: เฉลย
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // TODO 10: เฉลย
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // TODO 11: เฉลย
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  // TODO 12: เฉลย
  const completedCount = todos.filter(t => t.completed).length
  const activeCount = todos.length - completedCount

  return (
    <div className="todo-container">
      <header className="todo-header">
        {/* TODO 13: เฉลย */}
        <h1>รายการสิ่งที่ต้องทำ</h1>
        <p className="subtitle">จัดการงานของคุณอย่างเป็นระบบ</p>
      </header>

      {/* TODO 14: เฉลย */}
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

      {/* TODO 15: เฉลย */}
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

      {/* TODO 16-21: เฉลย */}
      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          <li className="empty-state">
            <div className="empty-icon">📝</div>
            <p>
              {filter === 'all' && 'ยังไม่มีรายการ เพิ่มรายการแรกของคุณเลย!'}
              {filter === 'active' && 'ไม่มีรายการที่ต้องทำ 🎉'}
              {filter === 'completed' && 'ยังไม่มีรายการที่เสร็จแล้ว'}
            </p>
          </li>
        ) : (
          filteredTodos.map((todo, index) => (
            <li 
              key={todo.id} 
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="checkmark"></span>
              </label>
              <span className="todo-text">{todo.text}</span>
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

      {/* TODO 22: เฉลย */}
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
