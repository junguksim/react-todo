import React from "react";
import TodoItem from "./TodoItem";

type Todo = {
  id: number;
  title: string;
};

type TodoListProps = {
  todos: Todo[];
  onDelete: Function;
};
function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default TodoList;
