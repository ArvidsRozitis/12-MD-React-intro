import React, { useState, useEffect } from 'react'
import uuid from 'react-uuid';
import './App.css'

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

interface ToDoItem {
  id: string,
  description: string,
  isDone: boolean
}
interface ToDoProps {
  todo: ToDoItem;
  toggleTodo: (id: string) => void;
}
interface ToDoProps2 {
  todoList: ToDoItem[];
  toggleTodo: (id: string) => void;
}




function App() {
  const [todoList, setTodoList] = useState<ToDoItem[]>([]);
  const [todoInput, setTodoInput] = useState('')

  const addTodoHandler = () => {
    if(todoInput === '') {
      return
    } else {
    setTodoList([...todoList, {id: uuid(), description: todoInput, isDone: false }])
    setTodoInput(''); 
    }   
  }

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) {
  //     setTodoList(storedTodos)
  //   }
  // },[])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  // }, [todoList])

  function toggleTodo(id: string) {
    const newTodoList = [...todoList]
    const todo = newTodoList.find(todo => todo.id === id)
    todo!.isDone = !todo!.isDone
    setTodoList(newTodoList)
  }

  function handleClear() {
    const newTodoList = todoList.filter(todo => !todo.isDone)
    setTodoList(newTodoList)
  }
  function TodoList({todoList, toggleTodo}:ToDoProps2) {
    return (
      todoList.map((todo) => {
        return <ToDo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      })
    )
  }
  function ToDo({todo, toggleTodo}:ToDoProps) {
    function handleTodoClick() {
      toggleTodo(todo.id)
    }
    return (
      <div>
        <label className='list__item'>
          <input type='checkbox' checked={todo.isDone} onChange={handleTodoClick}/>
          <p className='list__text'>{todo.description}</p>
        </label>
      </div>
    )
  }

  
  return (
    <div className="App">
      <TodoList todoList={todoList} toggleTodo={toggleTodo}/>  
      <input 
        type='text'
        value={todoInput} 
        onChange={(e)=> {
          setTodoInput(e.target.value)
        }}
      />
      <button onClick={addTodoHandler}>add</button>
      <button onClick={handleClear}>clear done</button>
      <div> {todoList.filter(todo => !todo.isDone).length} todo left</div>
    </div>
  )
}


export default App


