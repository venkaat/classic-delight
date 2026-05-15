"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function AIChat() {
  const [message, setMessage] = useState("");

const [messages, setMessages] = useState<
  {
    role: string;
    content: string;
  }[]
>([]);

const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

     setMessages((prev) => [
  ...prev,
  {
    role: "user",
    content: message,
  },
  {
    role: "ai",
    content: data.response,
  },
]);

setMessage("");

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        AI Assistant
      </h1>

      <textarea
  className="w-full border rounded-lg p-4"
  rows={6}
  value={message}
  onChange={(e) =>
    setMessage(e.target.value)
  }
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }}
/>

      <button
        onClick={sendMessage}
        className="mt-4 px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      <div className="mt-6 space-y-4">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`p-4 rounded-lg ${
        msg.role === "user"
          ? "bg-blue-100"
          : "bg-gray-100"
      }`}
    >
      <strong>
        {msg.role === "user"
          ? "You"
          : "AI"}
        :
      </strong>

      <ReactMarkdown>
  {msg.content}
</ReactMarkdown>
    </div>
  ))}
</div>
    </div>
  );
}