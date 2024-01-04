import { Dispatch, SetStateAction } from "react";

export type Todo = {
  id: string;
  name: string;
  checked: boolean;
};

export function addTodo(
  todo: Todo,
  setTodos: Dispatch<SetStateAction<Todo[]>>,
) {
  setTodos((prevState: Todo[]) => [...prevState, todo]);
}
