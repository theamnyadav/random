import React, { useState, useEffect } from "react";
import openai from "openai";

export default function Chatbot() {
  if (typeof obj !== "undefined") {
    obj.init();
  }

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    openai.init({
      apiKey: "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",
    });
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;
    setMessages([...messages, { type: "user", text: input }]);
    event.target.elements.input.value = "";

    const response = await openai.chatbot(input);
    setMessages([...messages, { type: "chatbot", text: response.data.answer }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Chatbot</h1>
      <div className="flex flex-col rounded-lg shadow-lg bg-white">
        <div className="overflow-y-scroll h-64">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-4 ${
                message.type === "user" ? "bg-gray-100" : "bg-blue-100"
              }`}
            >
              <p className="text-lg font-bold mb-2">{message.type}:</p>
              <p className="text-gray-700">{message.text}</p>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center px-4 py-3 bg-gray-200"
        >
          <input
            name="input"
            className="flex-1 px-2 py-1 rounded-lg focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="px-4 py-1 rounded-lg text-sm font-bold bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import openai from 'openai';

// export default function Chat() {
//   const [messages, setMessages] = useState([]);
//   const { register, handleSubmit } = useForm();

//   const onSubmit = async (data) => {
//     // Send user's message to GPT-3
//     openai.apiKey = "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";
//     const response = await openai.completions.create({
//       model: "davinci",
//       prompt: data.message,
//       max_tokens: 256,
//       n: 1,
//       stop: "."
//     });

//     // Add the response to the messages array and update the state
//     setMessages([...messages, { type: 'response', text: response.choices[0].text }]);
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex flex-col justify-between h-full">
//         {messages.map((message) => (
//           <div
//             key={message.text}
//             className={`text-sm font-light py-2 px-4 rounded-full my-2 ${message.type === 'response' ? 'bg-gray-300' : 'bg-blue-500'}`}
//           >
//             {message.text}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
//         <input
//           ref={register}
//           name="message"
//           className="py-2 px-4 rounded-full w-full outline-none focus:shadow-outline"
//           type="text"
//           placeholder="Enter your message"
//         />
//         <button type="submit" className="ml-2 py-2 px-4 rounded-full bg-blue-500 text-white font-bold">
//           Send
//         </button>
//       </form>
//     </div>
//   )}
