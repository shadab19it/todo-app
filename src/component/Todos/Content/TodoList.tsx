import React,{FC} from 'react';
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
             <button 
              type="button" 
              className="donebtn" 
              onClick={()=>completeTodo(index)}
              >done
             </button>
             <button 
              type="button" 
              className="deletebtn" 
              onClick={()=>deleteTodo(index)}
              >X
             </button>
           </div>       
         </div>
    )
  
  }

export default TodoList;