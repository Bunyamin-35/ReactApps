import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const App = () => {
  const [tasks,setTask] = useState([]);
  // const [tasks,setTask] = useState([
  //   {
  //     task_name: "Learn React in 2023",
  //     isEditing:false
  //   },
  //   {
  //     task_name: "Learn C# in 2023",
  //     isEditing:false,
  //   },
  //   {
  //     task_name: "Learn SQL in 2023",
  //     isEditing:false,
  //   },
  //   {
  //     task_name: "Start to work as a React Developer in summer 2023",
  //     isEditing:false,
  //   }
  // ]);
  useEffect(() => {
    const getLocalTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
    if(!!getLocalTodoList) {
      setTask(getLocalTodoList);
    }
  },[])

  return (
    <div className='mainbody'>
      <TodoForm tasks={tasks} setTask={setTask}
      isEditing:false/>
      <TodoList tasks={tasks} setTask={setTask} />
    </div>
  )
}

export default App;










































// import React, { useState, useEffect } from 'react';
// import './App.css';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// import { saveTodos, getTodos } from './utils/localStorage';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const storedTodos = getTodos();
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   useEffect(() => {
//     saveTodos(todos);
//   }, [todos]);

//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text: text,
//       completed: false
//     };
//     setTodos([...todos, newTodo]);
//   };

//   const completeTodo = (id) => {
//     const updatedTodos = todos.map(todo => {
//       if (todo.id === id) {
//         return { ...todo, completed: !todo.completed };
//       }
//       return todo;
//     });
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = (id) => {
//     const updatedTodos = todos.filter(todo => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <TodoForm addTodo={addTodo} />
//       <TodoList todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []); // Run only on component mount

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]); // Run whenever todos state changes

//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input type="text" value={newTodo} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;

// import { useState, useEffect } from 'react';
// import './App.css'

// const App = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);
//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if (storedTodos) {
//       setTodos(JSON.parse(storedTodos));
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input type="text" value={newTodo} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
