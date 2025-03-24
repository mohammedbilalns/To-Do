import styles from "./todoitem.module.css";
import { TodoItemType } from "./Todo";

type TodoItemProps = {
  item: TodoItemType;
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};

export default function TodoItem({ item, todos, setTodos }: TodoItemProps) {
  function handleDelete(name: string) {
    const authenticate = confirm("Are you sure you want to delete this item");
    if (authenticate) {
      setTodos(todos.filter((todo) => todo.name !== name));
    }
  }
  function handleDone(name: string) {
    setTodos(
      todos.map((todo) =>
        todo.name == name ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }
  const itemClass = item.done ? styles.completed : ""
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>
          <span className={itemClass} onClick={() => handleDone(item.name)}>{item.name}</span>
        </div>
        <button
          onClick={() => handleDelete(item.name)}
          className={styles.deleteButton}
        >
          X
        </button>
      </div>
      <hr className={styles.line} />
    </>
  );
}
