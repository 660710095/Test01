# 🎯 แบบฝึกหัด: React Todo List

แบบฝึกหัดสำหรับฝึกเขียน React + TypeScript โดยการเติม code ให้ครบตาม TODO ที่กำหนด

## 📋 เป้าหมายการเรียนรู้

หลังจากทำแบบฝึกหัดนี้เสร็จ คุณจะเข้าใจ:

- ✅ การใช้ `useState` Hook สำหรับจัดการ State
- ✅ การใช้ `useEffect` Hook สำหรับ Side Effects
- ✅ การสร้าง TypeScript Interface และ Type
- ✅ การจัดการ Form และ Event Handlers
- ✅ การใช้ Array Methods: `map`, `filter`
- ✅ Conditional Rendering
- ✅ การใช้ localStorage เก็บข้อมูล

## 🚀 วิธีเริ่มต้น

1. ติดตั้ง dependencies:

```bash
npm install
```

2. รันโปรเจค:

```bash
npm run dev
```

3. เปิดไฟล์ `src/App.tsx` และเติม code ตาม TODO

## 📝 รายการ TODO (22 ข้อ)

### ส่วนที่ 1: TypeScript Types
- **TODO 1**: สร้าง Interface สำหรับ Todo
- **TODO 2**: สร้าง Type สำหรับ Filter

### ส่วนที่ 2: State Management
- **TODO 3**: สร้าง State สำหรับ todos
- **TODO 4**: สร้าง State สำหรับ input value
- **TODO 5**: สร้าง State สำหรับ filter

### ส่วนที่ 3: Side Effects
- **TODO 6**: ใช้ useEffect บันทึกลง localStorage

### ส่วนที่ 4: Functions
- **TODO 7**: ฟังก์ชัน addTodo
- **TODO 8**: ฟังก์ชัน toggleTodo
- **TODO 9**: ฟังก์ชัน deleteTodo
- **TODO 10**: ฟังก์ชัน clearCompleted
- **TODO 11**: กรอง todos ตาม filter
- **TODO 12**: นับจำนวน completed และ active

### ส่วนที่ 5: JSX/UI
- **TODO 13**: เติมข้อความ header
- **TODO 14**: สร้าง form onSubmit
- **TODO 15**: สร้างปุ่ม filter
- **TODO 16-21**: แสดงรายการ todos
- **TODO 22**: Conditional rendering สำหรับปุ่ม clear

## 🖼️ ผลลัพธ์ที่ต้องการ

ดูภาพตัวอย่างได้ที่ `exam/image.png`

### ฟีเจอร์ที่ต้องทำงานได้:

1. **เพิ่มรายการ**: พิมพ์ในช่อง input แล้วกด Enter หรือคลิกปุ่ม "เพิ่ม"
2. **ทำเครื่องหมาย**: คลิก checkbox เพื่อเปลี่ยนสถานะ
3. **ลบรายการ**: คลิกปุ่มถังขยะ
4. **กรองรายการ**: คลิกปุ่ม "ทั้งหมด", "ยังไม่เสร็จ", "เสร็จแล้ว"
5. **ล้างรายการที่เสร็จ**: ปุ่มจะแสดงเมื่อมีรายการที่เสร็จแล้ว
6. **บันทึกข้อมูล**: ข้อมูลจะถูกบันทึกและไม่หายเมื่อ refresh

## 💡 คำใบ้

### useState
```typescript
const [state, setState] = useState<Type>(initialValue)
```

### useEffect
```typescript
useEffect(() => {
  // code ที่จะรันเมื่อ dependencies เปลี่ยน
}, [dependency1, dependency2])
```

### Array Methods
```typescript
// map - แปลงทุก element
array.map(item => /* return new item */)

// filter - กรองเฉพาะที่ต้องการ
array.filter(item => /* return true/false */)
```

### Event Handlers
```typescript
// Form submit
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // do something
}

// Input change
onChange={(e) => setValue(e.target.value)}
```

## 📁 โครงสร้างโปรเจค

```
react-todo-list-demo/
├── exam/
│   └── image.png      # ภาพผลลัพธ์ที่ต้องการ
├── src/
│   ├── App.tsx        # ⬅️ ไฟล์ที่ต้องแก้ไข
│   ├── App.answer.tsx # เฉลย (สำหรับผู้สอน)
│   ├── App.css        # Styling (ไม่ต้องแก้)
│   ├── main.tsx       # Entry point
│   ├── index.css      # Global styles
│   └── vite-env.d.ts  # Vite types
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## ⚠️ หมายเหตุ

- ไฟล์ `App.answer.tsx` เป็นเฉลย **ห้ามดู** จนกว่าจะทำเสร็จหรือติดปัญหาจริงๆ
- CSS ทั้งหมดเขียนไว้ให้แล้ว ไม่ต้องแก้ไข
- ถ้า TypeScript error ให้ตรวจสอบ types ที่กำหนดใน TODO 1-2

## 🎉 เมื่อทำเสร็จแล้ว

ลองเพิ่มฟีเจอร์เหล่านี้เพื่อฝึกเพิ่มเติม:

- [ ] แก้ไขข้อความ todo
- [ ] เพิ่ม due date
- [ ] เพิ่ม priority (สูง/กลาง/ต่ำ)
- [ ] เพิ่มการ sort ตามวันที่หรือ priority
- [ ] เพิ่ม animation เมื่อลบ

---

**Happy Coding! 🚀**
