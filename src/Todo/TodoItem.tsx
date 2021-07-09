import React from "react";

type Todo = {
  id: number;
  title: string;
};

type TodoProps = {
  todo: Todo;
  onDelete: Function;
};

function TodoItem({ todo, onDelete }: TodoProps) {
  return (
    <div className="TodoItem">
      {todo.title}
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
}

export default TodoItem;
