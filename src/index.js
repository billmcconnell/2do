import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './form.js';
import TodoForm from './form.js';
import Todo from './todo.js';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn React',
      isCompleted: false,
    },
    {
      text: 'eat a banana',
      isCompleted: false,
    },
    {
      text: 'wash the dog',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}];
    setTodos(newTodos);
  }

  /*
  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  } */

  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodo} />)}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals/reportWebVitals();
// moved from index.js line 42: <TodoForm addTodo={addTodo}/>
// copied from line 24: const newTodos = [...todos, {text:text, isCompleted:false}]
