import styles from "./todoitem.module.css";

export default function TodoItem({
  item,
  todos,
  setTodos,
}: {
  item: string;
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  function handleDelete(item: string) {
    const authenticate = confirm("Are you sure you want to delete this item");
    if (authenticate) {
      setTodos(todos.filter((todo) => todo !== item));
    }
  }
  return (
    <>
      <div className={styles.item}>
        <div className={styles.itemName}>{item}</div>
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          X
        </button>
      </div>
      <hr className={styles.line} />
    </>
  );
}
