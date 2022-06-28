import {useState} from "react"
import './App.css';
import React from 'react';
import Cont from './Cont'
const Todos=({todos,addTodo})=>{
  return<>
  {todos.map((todo)=>{
    return <h2>{todo}</h2>
  }

  )}
  <button onClick={addTodo}>aaddComponent</button>
  </>
}
function App(){
  const[todos,setTodos]=useState([]);
  const addTodo=()=>{
    setTodos((t)=>[...t,<Cont/>])
  }
  return <div className="App">

    <Todos todos={todos} addTodo={addTodo} />
  </div>
}

export default App;
