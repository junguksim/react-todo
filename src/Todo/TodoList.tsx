import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  title: string;
};

type TodoListProps = {
  todoList: Todo[];
  onDelete: Function;
};
function TodoList({ todoList, onDelete }: TodoListProps) {
  return (
    <div className="TodoList">
      {todoList.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default TodoList;
