import React from 'react';

function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
}
  
    return (
      <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Enter a todo..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
 }

 export default TodoForm;