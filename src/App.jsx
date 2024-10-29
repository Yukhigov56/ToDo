import { useState } from "react"
import Button from "./Components/Button"


function App() {
  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])
  
  const addTask = () => {
    if(value.trim()) {
      setTasks([...tasks, value])
      setValue('')
      console.log(tasks);
    }
  }


  console.log(value);


  const deleteTask = () => {
    setTasks(tasks.slice(1))
    }


   return (
     <>
     <div className="container">
    <h1>ToDo</h1>
    <div className="block-input-btn">
    <input
    type="text"
    placeholder="Введите имя"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    />

<Button onClick={addTask} text='Добавить' />
</div>

    <ul>
      {tasks.map((elem, index) => (
        <li className="title" key={index}>{elem} 
            <div className="container-btn">
                <button className="deleteBtn btn" onClick={deleteTask}>X</button>
                <button className="btn-made btn">+</button> 
            </div>
        </li>
      ))}
    </ul>
    </div>
    </>
  )
}

export default App
