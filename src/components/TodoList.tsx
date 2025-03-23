import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"

export default function TodoList({todos}:{todos:string[]}) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
