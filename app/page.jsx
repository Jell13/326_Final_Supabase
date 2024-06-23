"use client"

import { supabase } from "@lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Home() {

  const[text, setText] = useState("")
  const[todos, setTodos] = useState([])

  useEffect(() => {
    getTodo()
  },[])

  const getTodo = async () => {
    const{data,error} = await supabase.from("notes").select("*")
    // console.log(data)
    setTodos(data)
  }
  const handleSubmit = () => {

  }
  return (
    <div className="h-screen w-screen px-32">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1>Using Supabase</h1>
          <div className="flex gap-3">
            <input onChange={(e) => setText(e.target.value)} className="bg-gray-300 rounded-md px-2 py-[2px]" type="text" />
            <button className="bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 px-2 py-1 rounded-md">Add</button>
          </div>
          <div className="overflow-y-scroll max-h-24 w-full">
            {todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
