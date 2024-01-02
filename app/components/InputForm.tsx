import type { Todo } from "@/lib/todos";
import { PlusIcon } from "@heroicons/react/24/solid";
import { FormEvent, useState } from "react";

interface Props {
  addTodo: (todo: Todo) => void;
}

export default function InputForm({ addTodo }: Props) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo({
      id: Date.now().toString(),
      name: todoTitle,
      checked: false,
    });
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mt-4 w-full justify-center flex">
        <input
          type="text"
          placeholder="Add new todo..."
          className="border-b-accent border-b-2 p-1 outline-none bg-background text-xl max-w-xl w-full"
          required
          maxLength={65}
          value={todoTitle}
          aria-label="Todo Name"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button className="p-2 pl-4 pr-4 ml-3 font-bold bg-accent flex items-center rounded-lg">
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
}
