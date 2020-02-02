import React,{useState,FC} from 'react';
import {Card, List} from 'antd'
import TodoForm from '../../component/Todos/Content/TodoForm';
import TodoList from '../../component/Todos/Content/TodoList';
import './Todos.scss';

const Todo:FC = (props) => {
   const [todos,setTodos] = useState<any>([
     {
       text:'learn about react',
      //  isCompleted: false
     },
     {
       text:'Build some amazing product',
     },
   ])

   const addTodo = (text: string) =>{
     const newTodos = [...todos,{text}];
     setTodos(newTodos);
     console.log(newTodos);
   }

   const deleteTodo = (index:number) =>{
    const newTodos = [...todos]
      newTodos.splice(index,1)
      setTodos(newTodos);
   }
   const completeTodo =(index:number) =>{
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
      console.log(newTodos);
   }

  return (
    <div className="todoContent">
      <Card title="Set The Task" className="todo">
      <TodoForm addTodo={addTodo} />
      <ol>
         {todos.map((todo:string,index:number) =>(
           <TodoList 
            todo={todo} 
            index={index} 
            key={index} 
            deleteTodo={deleteTodo} 
            completeTodo={completeTodo}
           />
         ))}
      </ol>  
      </Card>
    </div>
  )
}

export default Todo;
