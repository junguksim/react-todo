import React from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";

function TodoMain() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "밥먹기",
    },
    {
      id: 2,
      title: "잠자기",
    },
    {
      id: 3,
      title: "눕기",
    },
  ]);
  const nextId = useRef(todos.length + 1);
  const [inputs, setInputs] = useState({
    title: "",
  });
  const { title } = inputs;
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const onCreate = useCallback(() => {
    const todo = {
      id: nextId.current,
      title,
    };
    setTodos(todos.concat(todo));
    setInputs({
      title: "",
    });
    nextId.current += 1;
  }, [title, todos]);

  const onDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <div className="TodoMain">
      <CreateTodo onCreate={onCreate} title={title} onChange={onChange} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  );
}
export default TodoMain;
