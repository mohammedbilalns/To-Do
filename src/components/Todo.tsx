import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {

  const [todos, setTodos] = useState<string[]>([]);

  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>
      <TodoList todos={todos} ></TodoList>
    </>
  );
}
