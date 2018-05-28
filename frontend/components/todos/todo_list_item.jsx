import React from 'react';

const TodoListItem = ({todo, removeTodo}) => (
  <div>
  <li> {todo.title} </li>
  <button onClick={removeTodo(todo}>Remove</button>
  </div>

);

export default TodoListItem;
