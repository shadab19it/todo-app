import React,{FC} from 'react';
import {Button} from 'antd';
import  '../../Todos/Todos.scss';


interface TodoListProps{
    todo:any,
    index:number,
    deleteTodo:(index:number)=> void;
    completeTodo:(index:number)=>void;
  }
  
  const TodoList:FC<TodoListProps> = (props) => {
    const {todo,index,deleteTodo,completeTodo} = props;
    return(
         <div className="todoList">
           <li style={{textDecoration:todo.isCompleted ? "line-through":"none"}} >{todo.text}</li>
  
           <div className="ctrl-btn">
             <Button 
              type="primary" 
              className="donebtn btn" 
              onClick={()=>completeTodo(index)}
              >done
             </Button>
             <Button 
              type="danger" 
              className="deletebtn btn" 
              onClick={()=>deleteTodo(index)}
              >X
             </Button>
           </div>       
         </div>
    )
  
  }

export default TodoList;