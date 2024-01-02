"use client";

import type { Todo } from "@/lib/todos";
import Image from "next/image";
import Logo from "../public/logo.png";
import InputForm from "./components/InputForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos((prevState) => [...prevState, todo]);
  }
  return (
    <main className="flex justify-center items-center min-h-screen pt-4 pb-4 ml-6 mr-6">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="justify-center gap-3 flex">
          <Image src={Logo} alt={"logo"} width={53} height={50}></Image>
          <h1 className="text-5xl font-bold">Todo</h1>
        </div>
        <InputForm addTodo={addTodo} />
      </div>
    </main>
  );
}
