import React from 'react';
import TodoListItem from './todo_list_item';

const TodoListContainer = (props) => {
  console.log(props);
  const listItems = props.todos.map((todo, idx) => (
      <TodoListItem key={idx} todo={todo} />
  ));

  return (
    <ul>
      {listItems}
    </ul>
  );
};

export default TodoListContainer;
