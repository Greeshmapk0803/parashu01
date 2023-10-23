import React, { createContext, useContext, useState } from 'react';

export const ChatContext = createContext();

export function ChatProvider({ children }) {
    const [article, setArticle] = useState('');
    const [chatMessages, setChatMessages] = useState([
        {
            message: "Namaste, paste an article here for detailed analysis!",
            sentTime: "just now",
            sender: "Parashu",
        },
    ]);

    const addMessage = (message) => {
        setChatMessages([...chatMessages, message]);
    };

    return (
        <ChatContext.Provider value={{ chatMessages, addMessage,article, setArticle }}>
            {children}
        </ChatContext.Provider>
    );
}

export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
