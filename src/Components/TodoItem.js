import React from 'react';

function TodoItem(props) {
  const style = {};
  props.item.completed ? (style.color = 'red') : (style.color = 'black');
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={style}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
