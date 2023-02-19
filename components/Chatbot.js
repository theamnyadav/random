import React, { useState, useEffect } from 'react';
import ChatGPT from 'chatgpt';
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatgpt, setChatGPT] = useState(null);

  useEffect(() => {
    async function initChatGPT() {
      const chatgpt = new ChatGPT();
      await chatgpt.start();
      setChatGPT(chatgpt);
    }
    initChatGPT();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await chatgpt.send(input);
    setMessages([...messages, { type: 'user', text: input }, { type: 'bot', text: response }]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="bg-gray-800 h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start justify-start mb-4 ${message.type === 'bot' ? 'ml-8' : 'mr-8'}`}>
                <div
                  className={`${
                    message.type === 'bot' ? 'bg-blue-500' : 'bg-gray-200'
                  } rounded-full px-4 py-2 text-sm font-medium text-gray-700 mr-4`}
                >
                  {message.type === 'bot' ? 'Bot' : 'You'}
                </div>
                <div className="text-base font-light leading-relaxed text-gray-800">{message.text}</div>
              </div>
            ))}
          </div>
          </div>
          </div>
          </div>
  )}
export default Chatbot