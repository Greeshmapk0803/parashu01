import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { Toast } from '../../components';

const API_KEY = process.env.REACT_APP_CHAT_GPT_API_KEY;

const Chat = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            message: "Hello, I'm ChatGPT! Ask me anything! About the article you gave just now",
            sentTime: "just now",
            sender: "ChatGPT",
        },
        {
            message: "Hello, I want you to quiz me on the article I gave you",
            sentTime: "just now",
            sender: "User",
        },
        {
            message: "Certainly, What kind of quiz do you want? Choose one of the following options: 1. Fill in the blanks 2. True or False 3. Multiple Choice Questions",
            sentTime: "just now",
            sender: "ChatGPT",
        },
        {
            message: "3",
            sentTime: "just now",
            sender: "User",
        },
        {
            message: "Generating....",
            sentTime: "just now",
            sender: "ChatGPT",
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    //both needed for toast
    const [toastify, setToastify] = useState(false)
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (inputMessage.trim() === '') {
            return;
        }

        const newMessage = {
            message: inputMessage,
            direction: 'outgoing',
            sender: "user",
        };

        setMessages([...messages, newMessage]);
        setInputMessage('');
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content,
                    sender: "ChatGPT",
                };
                setMessages([...messages, chatGPTResponse]);
            }
            console.log(response);
        } catch (error) {
            console.error("Error processing message:", error);
            // Handle error (show error toast, etc.)
            setError(error)
            setToastify(true);//setting toast
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages) {
        const apiMessages = chatMessages.map((messageObject) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return { role, content: messageObject.message };
        });

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                { role: "system", content: "I'm a Student using ChatGPT for learning" },
                ...apiMessages,
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        });

        console.log(response.json());
        return response.json();
    }

    return (
        <Container maxWidth="md" sx={{
            height: '80vh', 
            bgcolor: 'primary.main',
            margin:'1em auto',
            p:'1em',
            borderRadius:'10px'
        }}>

            <Paper elevation={3} sx={{ padding: '20px',bgcolor:'primary.chat', color:'primary.contrastText',marginBottom: '15px', height:'68vh', overflowY:'scroll', scrollbarWidth:'thin', scrollbarColor: 'transparent transperent' }}>
                {messages.map((message, index) => (
                    <Typography key={index} variant="body1" style={{ marginBottom: '10px' }}>
                        <strong>{message.sender}:</strong> {message.message}
                    </Typography>
                ))}
            </Paper>
            <form onSubmit={handleSendMessage} style={{ display: 'flex'}}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Type your message..."
                    value={inputMessage}
                    onChange={handleInputChange}
                    color='secondary'
                    focused 
                    sx={{ input: { color: 'whitesmoke' }}}
                />
                <Button
                    variant="contained"
                    color="tertiary"
                    type="submit"
                    style={{ marginLeft: '10px', minWidth: '100px' }}
                >
                    Send
                </Button>
            </form>
            <Toast show={toastify} err={error} pullData={isTyping} />
        </Container>
    );
};

export default Chat;
