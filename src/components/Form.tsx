import { useState } from "react";

type TodoProp = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Form({ todos, setTodos }: TodoProp) {
  const [todo, setTodo] = useState<string>("");

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todo.trim() !== "" && !todos.includes(todo)) {
      setTodos([...todos, todo]);
    }
    setTodo("");
  }
  return (
    <form onSubmit={addTodo}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
