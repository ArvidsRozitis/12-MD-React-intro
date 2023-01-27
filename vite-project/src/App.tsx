import { useState } from 'react'
import './App.css'

function App() {

  let arr: string[] = []
  const [todos, setTodos] = useState(arr)
  const [todoInput, setTodoInput] = useState('')
  
  const addTodoHandler = () => {
    setTodos([...todos, todoInput])
    setTodoInput('');    
  }

  console.log(todos)
  const [taskIsDone, setTaskIsDone] = useState('task__item')
  const allTasks = todos.map(task => { 
    return (
      <li
      key={task}
      className={taskIsDone}      
      >
      <Button
        label='done'
        id={task}
        onClick={()=>{taskIsDone === 'task__item' ? setTaskIsDone('task__item task__item--is-done') : setTaskIsDone('task__item')}}
      />
      {task}
      <Button
        label='x'
        id={task}
        onClick={(task: string) => {
          const index = todos.indexOf(task)
          todos.splice(index, 1);
          console.log(todos)
          setTodos([...todos])
        }}
      />
    </li>)
  });
  
  return (
    <div className="App">
      <div>
        <input
          className='input'
          type='text'
          value={todoInput}
          onChange={(e)=> {
            setTodoInput(e.target.value)
          }}
        />
        <Button
          onClick={addTodoHandler}
          label='add'
        />
      </div>
      <ul className='task task__list'>{allTasks}</ul>
    </div>
  )
}


interface TaskToDO {
  description: string,
  isdone: boolean  
}

const allTasks: TaskToDO[] = [
  {
    description: 'work1',
    isdone: false
  },
  {
    description: 'work3',
    isdone: false
  },
  {
    description: 'work2',
    isdone: false
  },
]


const Calculate = () => {
  const [total, setTotal] = useState(0)
  
  return (
    <div>
      <h1>{total}</h1>
      <Button
        label='add 5'
        onClick={()=> setTotal(total +5)}
      />
      <button
        onClick={() => { 
          setTotal(total + 5)
        }}
        >add 5</button>
      <button>add 10</button>
    </div>
  )
}


// const ShowTasks = () => {
//   const remainingTasks = allTasks.map(task => {
//     const [isDone, setIsDone] = useState(false)
       
//     return (
//       <li
//       key={task.description} 
//       className={task.isdone === isDone ? "task task__item" : 'task task__item task__item--is-done'}
//       >
//       {task.description}
//       <Button
//         label="task is done"
//         onClick={() => setIsDone(!isDone)}
//        />
//     </li>)
//   });
  
//   return (
//     <ul className='task task__list'>{remainingTasks}</ul>
//   );
// }

const Button = (props: any) => {
  return (
    <button 
      className='button'
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

export default App


