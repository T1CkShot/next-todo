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

export function getTodos(key: string) {
  if (typeof window !== "undefined") {
    const todos = localStorage.getItem(key);
    if (todos) {
      return JSON.parse(todos);
    }
    return [];
  }
}

export function deleteTodo(
  id: string,
  setTodos: Dispatch<SetStateAction<Todo[] | null>>,
) {
  setTodos((prevState: Todo[] | null) => {
    if (prevState) {
      return prevState?.filter((todo) => todo.id !== id);
    }
    return [];
  });
}

export function toggleTodo(
  id: string,
  checked: boolean,
  setTodos: Dispatch<SetStateAction<Todo[] | null>>,
) {
  setTodos((prevState: Todo[] | null) => {
    if (prevState) {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });
    }
    return prevState;
  });
}
