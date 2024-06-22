"use client"

import { useState } from "react";

export default function Home() {

  const[text, setText] = useState("")

  const handleSubmit = () => {

  }
  return (
    <div className="h-screen w-screen px-32">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1>Using Supabase</h1>
          <div className="flex gap-3">
            <input  className="bg-gray-300 rounded-md px-2 py-[2px]" type="text" />
            <button onClick={handleSubmit} className="bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 px-2 py-1 rounded-md">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
