import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"

export default function TodoList({todos, setTodos}:{todos:string[],  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
