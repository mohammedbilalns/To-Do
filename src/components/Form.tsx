import { useState } from "react";
import styles from "./form.module.css";
type TodoProp = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function Form({ todos, setTodos }: TodoProp) {
  const [todo, setTodo] = useState<string>("");

  function addTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (todo.trim() == "") {
      alert("To-do item cannot be empty.");
      return;
    }
    if (todos.includes(todo.trim())) {
      alert("This item already exists");
      return;
    }
    setTodos([...todos, todo.trim()]);
    setTodo("");
  }
  return (
    <form onSubmit={addTodo}>
      <div className={styles.inputContainer}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          className={styles.inputBox}
        />
        <button className={styles.addButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
