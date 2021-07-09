import React from "react";

type CreateTodoProps = {
  title: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onCreate: React.MouseEventHandler<HTMLButtonElement>;
};

function CreateTodo({ onChange, onCreate, title }: CreateTodoProps) {
  return (
    <div className="CreateTodo">
      <input name="title" placeholder="What to do?" value={title} onChange={onChange}></input>
      <button onClick={onCreate}>Create!</button>
    </div>
  );
}

export default CreateTodo;
