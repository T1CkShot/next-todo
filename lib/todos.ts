import { warn } from "console";
import { Dispatch, SetStateAction } from "react";

export type Todo = {
  id: string;
  name: string;
  checked: boolean;
};

export function addTodo(
  todo: Todo,
  setTodos: Dispatch<SetStateAction<Todo[] | null>>,
) {
  setTodos((prevState: Todo[] | null) => {
    if (prevState) {
      return [...prevState, todo];
    }
    return [todo];
  });
}
