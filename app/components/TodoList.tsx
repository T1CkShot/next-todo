import { Todo, deleteTodo, toggleTodo } from "@/lib/todos";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";

interface Props {
  todos: Todo[] | null;
  setTodos: Dispatch<SetStateAction<Todo[] | null>>;
}

export default function TodoList({ todos, setTodos }: Props) {
  return (
    <>
      <ul className="w-full flex flex-col items-start mt-5 max-w-xl">
        {todos?.map((todo) => {
          return (
            <li
              key={todo.id}
              className="p-1 font-body text-xl gap-2 flex w-full"
            >
              <input
                type="checkbox"
                className="w-6 text-primary align-middle accent-primary peer"
                checked={todo.checked}
                onChange={(e) =>
                  toggleTodo(todo.id, e.target.checked, setTodos)
                }
              />
              <p className="peer-checked:text-slate-400 peer-checked:line-through">
                {todo.name}
              </p>
              <button
                className="p-2 font-bold hover:bg-primary flex items-center rounded-lg ml-auto"
                onClick={() => deleteTodo(todo.id, setTodos)}
              >
                <TrashIcon className="h-4 w-4" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
