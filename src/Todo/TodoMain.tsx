import React from "react";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";

function TodoMain() {
  const [todoList, setTodoList] = useState([
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
  const nextId = useRef(todoList.length + 1);
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
    setTodoList(todoList.concat(todo));
    setInputs({
      title: "",
    });
    nextId.current += 1;
  }, [title, todoList]);

  const onDelete = useCallback(
    (id: number) => {
      setTodoList(todoList.filter((todo) => todo.id !== id));
    },
    [todoList]
  );

  return (
    <div className="TodoMain">
      <CreateTodo onCreate={onCreate} title={title} onChange={onChange} />
      <TodoList todoList={todoList} onDelete={onDelete} />
    </div>
  );
}
export default TodoMain;
