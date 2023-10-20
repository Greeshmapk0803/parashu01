// import React, { useState } from 'react';
// import openai from 'openai';

// const ChatApp = () => {
//   const [conversationHistory, setConversationHistory] = useState([]);

//   const sendMessageToChatGPT = async (message) => {
//     const completion = await openai.createCompletion({
//       model: 'gpt-3.5-turbo',
//       prompt: `ChatGPT response to "${message}":`,
//     });

//     setConversationHistory([...conversationHistory, {
//       user: 'User',
//       message,
//     }, {
//       user: 'ChatGPT',
//       message: completion.text,
//     }]);
//   };

//   const receiveMessageFromChatGPT = (message) => {
//     setConversationHistory([...conversationHistory, {
//       user: 'ChatGPT',
//       message,
//     }]);
//   };

//   const ChatComponent = () => {
//     return (
//       <div>
//         <ul>
//           {conversationHistory.map((message, index) => (
//             <li key={index}>{message.user}: {message.message}</li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Enter a message"
//           onKeyPress={(event) => {
//             if (event.key === 'Enter') {
//               sendMessageToChatGPT(event.target.value);
//             }
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <ChatComponent />
//   );
// };

// export default ChatApp;
