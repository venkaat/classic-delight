"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
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

      setReply(data.response);

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
      />

      <button
        onClick={sendMessage}
        className="mt-4 px-6 py-3 bg-black text-white rounded-lg"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {reply && (
        <div className="mt-6 border rounded-lg p-4">
          {reply}
        </div>
      )}
    </div>
  );
}