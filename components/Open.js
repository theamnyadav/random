import React, { useState } from 'react'; import { useForm } from 'react-hook-form';
 import openai from 'openai'; 
 export default function Chat() { 
    const [messages, setMessages] = useState([]); 
    const { register, handleSubmit } = useForm(); const onSubmit = async (data) => {
         // Send user's message to GPT-3 
         openai.apiKey = "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"; 
         const response = await openai.completions.create({ model: "YOUR_GPT3_MODEL", 
         prompt: data.message, max_tokens: 256, n: 1, stop: "." });
          // Add the response to the messages array and update the state 
          setMessages([...messages, { type: 'response', text: response.choices[0].text }]); }
           return ( 
           <div className="bg-white rounded-lg shadow-md p-6">
             <div className="flex flex-col justify-between h-full"> {messages.map((message) => ( <div key={message.text} className={`text-sm font-light py-2 px-4 rounded-full my-2 ${message.type === 'response' ? 'bg-gray-300' : 'bg-blue-500'}`} > {message.text} </div> ))} </div>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4"> 
              <input ref={register} name="message" className="py-2 px-4 rounded-full w-full outline-none focus:shadow-outline" type="text" placeholder="Enter your message" />
               <button type="submit" className="ml-2 py-2 px-4 rounded-full bg-blue-500 text-white font-bold"> Send </button> </form>
                </div>
           )}
// import React, { useState } from "react";
// import openai from "openai";

// export default function Chatbot() {
//   const [messages, setMessages] = useState([]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const input = event.target.elements.input.value;
//     setMessages([...messages, { type: "user", text: input }]);
//     event.target.elements.input.value = "";

//     const response = await openai.chatbot(input);
//     setMessages([...messages, { type: "chatbot", text: response.data.answer }]);
//   };

//   return (
//     <div>
//       <h1>Chatbot</h1>
//       <ul>
//         {messages.map((message, index) => (
//           <li key={index}>
//             <b>{message.type}:</b> {message.text}
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input name="input" />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }
