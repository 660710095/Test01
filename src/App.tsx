import { useState, useEffect, FormEvent } from 'react'
import './App.css'

// ===================================================
// 🎯 แบบฝึกหัด: React Todo List
// ===================================================
// เติม code ในส่วนที่มี TODO ให้ครบ
// เพื่อให้แอปทำงานได้ตามภาพตัวอย่าง
// ===================================================

// TODO 1: สร้าง Interface สำหรับ Todo
// Hint: Todo ควรมี property: id (number), text (string), 
//       completed (boolean), createdAt (string)
interface Todo {
  // เติม properties ที่นี่
}

// TODO 2: สร้าง Type สำหรับ Filter
// Hint: FilterType ควรเป็น 'all' | 'active' | 'completed'
type FilterType = '' // แก้ไขให้ถูกต้อง

function App() {
  // TODO 3: สร้าง State สำหรับเก็บรายการ todos
  // Hint: ใช้ useState<Todo[]> และโหลดข้อมูลจาก localStorage
  const [todos, setTodos] = useState<Todo[]>([])

  // TODO 4: สร้าง State สำหรับเก็บค่า input
  // Hint: ใช้ useState<string> เริ่มต้นเป็น string ว่าง
  const [inputValue, setInputValue] = useState(/* เติมค่าเริ่มต้น */)

  // TODO 5: สร้าง State สำหรับเก็บ filter ปัจจุบัน
  // Hint: ใช้ useState<FilterType> เริ่มต้นเป็น 'all'
  const [filter, setFilter] = useState<FilterType>(/* เติมค่าเริ่มต้น */)

  // TODO 6: ใช้ useEffect เพื่อบันทึก todos ลง localStorage ทุกครั้งที่ todos เปลี่ยน
  // Hint: ใช้ localStorage.setItem และ JSON.stringify
  useEffect(() => {
    // เติม code ที่นี่
  }, [/* เติม dependency */])

  // TODO 7: สร้างฟังก์ชัน addTodo สำหรับเพิ่มรายการใหม่
  // Hint: ต้อง preventDefault, ตรวจสอบ inputValue ไม่ว่าง, 
  //       สร้าง newTodo object, อัพเดท todos, และ clear input
  const addTodo = (e: FormEvent<HTMLFormElement>) => {
    // เติม code ที่นี่
  }

  // TODO 8: สร้างฟังก์ชัน toggleTodo สำหรับเปลี่ยนสถานะ completed
  // Hint: ใช้ map เพื่อหา todo ที่ตรงกับ id และ toggle completed
  const toggleTodo = (id: number) => {
    // เติม code ที่นี่
  }

  // TODO 9: สร้างฟังก์ชัน deleteTodo สำหรับลบรายการ
  // Hint: ใช้ filter เพื่อเอา todo ที่ไม่ตรงกับ id ออก
  const deleteTodo = (id: number) => {
    // เติม code ที่นี่
  }

  // TODO 10: สร้างฟังก์ชัน clearCompleted สำหรับลบรายการที่เสร็จแล้วทั้งหมด
  // Hint: ใช้ filter เพื่อเอาเฉพาะ todo ที่ยังไม่ completed
  const clearCompleted = () => {
    // เติม code ที่นี่
  }

  // TODO 11: กรอง todos ตาม filter ปัจจุบัน
  // Hint: ถ้า filter เป็น 'active' ให้แสดงเฉพาะที่ยังไม่ completed
  //       ถ้า filter เป็น 'completed' ให้แสดงเฉพาะที่ completed แล้ว
  //       ถ้าเป็น 'all' ให้แสดงทั้งหมด
  const filteredTodos = todos.filter(todo => {
    // เติม code ที่นี่
    return true // แก้ไขให้ถูกต้อง
  })

  // TODO 12: นับจำนวน todo ที่เสร็จแล้วและยังไม่เสร็จ
  // Hint: ใช้ filter และ .length
  const completedCount = 0 // แก้ไขให้ถูกต้อง
  const activeCount = 0 // แก้ไขให้ถูกต้อง

  return (
    <div className="todo-container">
      <header className="todo-header">
        {/* TODO 13: เติมข้อความ header */}
        <h1>{/* เติมหัวข้อ */}</h1>
        <p className="subtitle">{/* เติม subtitle */}</p>
      </header>

      {/* TODO 14: สร้าง form สำหรับเพิ่ม todo */}
      {<form onSubmit={addTodo} className="todo-form">
        <input
          // สร้าง input สำหรับเพิ่ม todo
        />
        <button type="submit" className="add-btn">
          <span className="btn-icon">+</span>
          <span className="btn-text">เพิ่ม</span>
        </button>
      </form>}

      {/* TODO 15: สร้างปุ่ม filter */}
      <div className="filter-tabs">
        {/* สร้างปุ่ม filter */}
      </div>

      {/* TODO 16: แสดงรายการ todos */}
      <ul className="todo-list">
        {filteredTodos.length === 0 ? (
          // แสดง empty state เมื่อไม่มีรายการ
          <li className="empty-state">
            <div className="empty-icon">📝</div>
            <p>
              {/* TODO 17: แสดงข้อความตาม filter */}
            </p>
          </li>
        ) : (
          // TODO 18: ใช้ map เพื่อแสดงแต่ละ todo
          // Hint: ต้องใส่ key prop และใช้ todo.id
          filteredTodos.map((todo, index) => (
            <li 
              // key={/* เติม unique key */} 
              // className={`todo-item ${todo.completed ? 'completed' : ''}`}
              // style={{ animationDelay: `${index * 0.05}s` }}
            >
              <label className="checkbox-container">
                {/* TODO 19: สร้าง checkbox สำหรับ toggle */}
                <input
                  // สร้าง checkbox สำหรับ toggle
                  // state ของ todo
                />
                <span className="checkmark"></span>
              </label>
              {/* TODO 20: แสดงข้อความของ todo */}
              <span className="todo-text">{/* เติม todo text */}</span>
              {/* TODO 21: สร้างปุ่มลบ */}
              <button 
                // เติมการเรียก deleteTodo
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
                </svg>
              </button>
            </li>
          ))
        )}
      </ul>

      {/* TODO 22: แสดงปุ่ม clear completed เมื่อมีรายการที่เสร็จแล้ว */}
      {/* Hint: ใช้ conditional rendering ตรวจสอบ completedCount > 0 */}
      {/* เติม conditional rendering ที่นี่ */}
    </div>
  )
}

export default App
