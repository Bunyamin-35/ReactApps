import React, { useState } from 'react'
import './components.css';

function TodoForm({ tasks, setTask }) {
  const [form, setForm] = useState({ task_name: ""})
  const [showModal, setshowModal] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function onSubmit(e) {
    e.preventDefault();
    if (form.task_name.length > 0) {
      localStorage.setItem("todoList",JSON.stringify([...tasks, form]))
      setTask([...tasks, form]);
      setForm({ task_name: "" });
    } else {
      setshowModal(true);
    }
  }
  function handleCloseModal() {
    setshowModal(false)
  }
  return (
    <>
      <div className='todo_form'>
        <h2>todo app</h2>
        <form onSubmit={onSubmit} className="form">
          <label htmlFor="task_name">new task</label>
          <input onChange={handleChange} value={form.task_name} name='task_name' id='task_name' className='form_input' placeholder='Add new plan' />
          <button type='submit' className="addbtn">
            <span className="btn-text-one">Add new task</span>
            <span className="btn-text-two">Great!</span>
          </button>
        </form>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="title-card">
              <h2>Warning!</h2>
              <button className="close-button" onClick={handleCloseModal}>
                Close
              </button>
            </div>
            <div className="desc-card">
              <span>lütfen bir todo giriniz!!</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoForm;




// import React, { useState } from 'react';

// function TodoForm({ addTodo }) {
//   const [text, setText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim() !== '') {
//       addTodo(text);
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={text}
//         onChange={e => setText(e.target.value)}
//         placeholder="Enter a new todo"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default TodoForm;
