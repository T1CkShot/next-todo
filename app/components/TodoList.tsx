import type { Todo } from "@/lib/todos";

interface Props {
  todos: Todo[];
}

export default function TodoList({ todos }: Props) {
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" />
              {todo.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}
