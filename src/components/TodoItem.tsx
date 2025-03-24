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
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>{item.name}</div>
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
