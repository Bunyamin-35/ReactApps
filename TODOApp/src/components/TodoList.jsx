import React, { useState } from 'react';

function TodoList({ tasks, setTask }) {
  const [filterTask, setFilterTask] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  

  const handleFilterChange = (e) => {
    setFilterTask(e.target.value.toLowerCase());
  };

  const filteredList = tasks.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterTask)
    })
  });
  const editTaskChange = (e, taskId) => {
    const editedTask = e.target.value;
    const updatedListItems = tasks.map((item, index) => {
      if (index === taskId) {
        return { ...item, task_name: editedTask }
      }
      return item;
    });
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);
  }
  const handleItemChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleDelete = (index) => {
    const updatedListItems = tasks.filter((item, i) => i !== index);
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);
  };

  const handleDeleteAll = () => {
    const updatedListItems = tasks.filter(
      (item, index) => !selectedItems.includes(index)
    );
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);
    setSelectedItems([]);
  };
  
  const handleEdit = (itemId) => {
    const updatedListItems = tasks.map((item,index) =>{
      if(index === itemId) {
        return {...item,isEditing:true}
      }
      return item;
    });
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);

  }
  const saveTask = (itemId,newTask) => {
    const updatedListItems = tasks.map((item,index) =>{
      if(index === itemId) {
        return {...item,task_name:newTask,isEditing:false}
      }
      return item;
    });
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);
  }
  const cancelTask = (itemId) => {
    const updatedListItems = tasks.map((item,index) =>{
      if(index === itemId) {
        return {...item,isEditing:false}
      }
      return item;
    });
    localStorage.setItem("todoList",JSON.stringify(updatedListItems))
    setTask(updatedListItems);
  }

  return (
    <div className='todo_list'>
      <h2>Plans</h2>
      <div className='list_form'>
        <label htmlFor='search'>Search</label>
        <input
          id='search'
          type='text'
          value={filterTask}
          onChange={handleFilterChange}
          placeholder='Search'
        />
      </div>
      <div className="deleteall">
        {selectedItems.length >= 2 && (
          <button onClick={handleDeleteAll} className='deleteallbtn'>Delete Selected</button>
        )}
      </div>
      <div className='list_group'>
        {filteredList.map((task, index) => (
          <div key={index} className='list-group-item'>
            <div className="todo-content">
              <input
                className='checkbox'
                type='checkbox'
                checked={selectedItems.includes(index)}
                onChange={() => handleItemChange(index)}
              />
              {/* {task.task_name} */}
              {task.isEditing ? (
                <input
                  type="text"
                  value={task.task_name}
                  onChange={(e) => editTaskChange(e, index)}
                />
              ) : (
                <span>
                  {task.task_name}
                </span>
              )}
            </div>
            <div className='actions_btns'>
              {task.isEditing ? (
                <>
                  <button type='button' className='editbtn' onClick={() => saveTask(index, task.task_name)}>Save</button>
                  <button type='button' className='deletebtn' onClick={() => cancelTask(index, task.task_name)}>Cancel</button>
                </>
              ) : (
                <>
                  <button className='editbtn' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='deletebtn' onClick={() => handleDelete(index)}>Delete</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;


