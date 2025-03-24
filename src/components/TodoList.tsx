import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
import { TodoItemType } from "./Todo";

type TodoListProps = {
  todos: TodoItemType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
};
export default function TodoList({
  todos,
  setTodos,
}: TodoListProps) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
