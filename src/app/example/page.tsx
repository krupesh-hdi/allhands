"use client";

import { Button } from "@/components/ui/button";
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
      <Button onClick={handleClick}>Click Me</Button>
      <div className="mt-4 text-gray-700">{output}</div>
    </div>
  );
}
