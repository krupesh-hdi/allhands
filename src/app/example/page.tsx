"use client";

import { useState } from "react";

export default function ExamplePage() {
  const [output, setOutput] = useState<string>("");

  const handleClick = async () => {
    try {
      const response = await fetch("/api/example");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setOutput(data.message);
    } catch (error) {
      setOutput("Error: Unable to fetch data");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click Me
      </button>
      <div className="mt-4 text-gray-700">{output}</div>
    </div>
  );
}
