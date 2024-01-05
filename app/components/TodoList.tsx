import type { Todo } from "@/lib/todos";

interface Props {
  todos: Todo[] | null;
}

export default function TodoList({ todos }: Props) {
  return (
    <>
      <ul className="w-full flex flex-col items-start mt-4 max-w-xl">
        {todos?.map((todo) => {
          return (
            <li key={todo.id} className="p-1 font-body text-xl gap-2 flex">
              <input
                type="checkbox"
                className="w-6 text-primary align-middle accent-primary"
              />
              {todo.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
