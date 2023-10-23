import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Paper, Typography, Box } from '@mui/material';
import { Toast } from '../../components';
import { ChatBG } from '../../assets/images';
import { useLocation } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_CHAT_GPT_API_KEY;

const Chat = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            message: "Namaste, paste an article here for detailed analysis!",
            sentTime: "just now",
            sender: "Parashu",
        }
    ]);

    console.log('INITIAL', messages);
    const [isTyping, setIsTyping] = useState(false);

    //both needed for toast
    const [toastify, setToastify] = useState(false)
    const [error, setError] = useState(null);

    const location = useLocation();

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
                    sender: "Parashu",
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
            const role = messageObject.sender === "Parashu" ? "assistant" : "user";
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

        console.log(response);
        return response.json();
    }

    useEffect(() => {
        const BotInput = new URLSearchParams(location.search);
        const prompt = BotInput.get('content');
        console.log(prompt);
        setInputMessage(prompt);

    }, [])


    return (
        <Container maxWidth="md" sx={{
            height: '80vh',
            bgcolor: 'primary.main',
            margin: '1em auto',
            p: '1em',
            borderRadius: '10px'
        }}>

            <Paper elevation={3} sx={{
                padding: '20px',
                background: `linear-gradient(rgba(0,0,0,0.597), rgba(0,0,0,0.597)) ,url(${ChatBG})`,
                color: 'primary.contrastText',
                marginBottom: '15px',
                height: '65vh',
                overflowY: 'scroll',
                scrollbarWidth: 'thin',
                scrollbarColor: 'transparent transperent'
            }}>
                {messages.map((message, index) => (
                    <Box key={index} variant="body1" style={{
                        marginBottom: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {message.sender === 'Parashu' ? (
                            <Typography component='p' sx={{
                                bgcolor: 'primary.main',
                                borderRadius: '10px',
                                p: '5px 7px',
                                margin: '5px 0',
                                textAlign: 'left',
                                maxWidth: '80%',
                                alignSelf: 'flex-start',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography component='small' sx={{ fontSize: '10px' }}>Parashu</Typography>
                                {message.message}
                            </Typography>
                        ) : (
                            <Typography component='p' sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                borderRadius: '10px',
                                p: '5px 7px',
                                margin: '5px 0',
                                textAlign: 'left',
                                maxWidth: '80%',
                                alignSelf: 'flex-end',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Typography component='small' sx={{ fontSize: '10px' }}>You</Typography>
                                {message.message}
                            </Typography>
                        )}
                    </Box>
                ))}
                        {isTyping && <Typography component='p' sx={{
                            bgcolor: 'primary.main',
                            borderRadius: '10px',
                            width:'fit-content',
                            p: '5px 7px',
                            margin: '5px 0',
                            textAlign: 'left',
                            maxWidth: '80%',
                            alignSelf: 'flex-start',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Typography component='small' sx={{ fontSize: '10px' }}>ChatGPT</Typography>
                            Generating...
                        </Typography>}
            </Paper>
            <form onSubmit={handleSendMessage} style={{ display: 'flex' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Type your message..."
                    value={inputMessage}
                    onChange={handleInputChange}
                    color='secondary'
                    focused
                    sx={{ input: { color: 'whitesmoke' } }}
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
