import React, {useState,FC} from 'react';
import  '../../Todos/Todos.scss';

interface TodoFormProps{
    addTodo:any;
  }
  
  const TodoForm:FC<TodoFormProps> = (props) => {
    const {addTodo} = props;
    const [value ,setValue] = useState<string>("");
  
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
      if (!value) return null;
      addTodo(value);
      setValue("");
    }

    const onClick = ()=>{
      if (!value) return null;
      addTodo(value);
    }

    return (
    <div> 
      <form onSubmit={handleSubmit} className="form">
        <input type="text"
         name="task" 
         className="input"
         placeholder="Todo..."
         required
         autoComplete="off"
         value={value} 
         onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
         />
         <button type="button" className="addbtn btn-grey" onClick={onClick}>Add Todo</button>
      </form>
    </div>
    )
  }

export default TodoForm;