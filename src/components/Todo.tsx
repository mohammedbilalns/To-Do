import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export type TodoItemType = {
  name:string, 
  done: boolean
}
export default function Todo() {

  const [todos, setTodos] = useState<TodoItemType[]>([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} setTodos={setTodos} ></TodoList>
    </>
  );
}
