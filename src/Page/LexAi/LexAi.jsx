import { useEffect, useRef, useState } from 'react';

const LexAi = () => {
    const [userMessages, setUserMessages] = useState([]);
    const [response, setResponse] = useState({
        Answer: 'Hey, this is Lex.Ai! Feel free to ask me anything.',
    });
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [val, setVal] = useState('');

    const chatContainerRef = useRef(null);
    const textAreaRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }, [userMessages, response.Answer]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleAi();
        }
    };

    const handleAi = async () => {
        setLoading(true);
        const userMessage = { text: val, type: 'user' };
        setUserMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            const apiResponse = await fetch('http://localhost:5110/api/prompt_route', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_prompt: val }),
            });
            const data = await apiResponse.json();
            setResponse(data);
            updateConversations(userMessage, data);
        } catch (error) {
            console.error('Error submitting prompt:', error);
        } finally {
            setLoading(false);
            setVal('');
        }
    };

    const updateConversations = (userMessage, responseData) => {
        const newMessage = { text: responseData.Answer, type: 'Lex.Ai' };

        if (userMessage.text === 'New Chat') {
            setConversations((prevConversations) => [
                ...prevConversations,
                { id: Date.now(), title: `Conversation ${prevConversations.length + 1}`, messages: [userMessage, newMessage] },
            ]);
        } else {
            const existingConversationIndex = conversations.findIndex(
                (conversation) => conversation.title === userMessage.text
            );

            if (existingConversationIndex !== -1) {
                const updatedConversations = [...conversations];
                updatedConversations[existingConversationIndex].messages = [userMessage, newMessage];
                setConversations(updatedConversations);
            } else {
                setConversations((prevConversations) => [
                    ...prevConversations,
                    { id: Date.now(), title: userMessage.text, messages: [userMessage, newMessage] },
                ]);
            }
        }
    };

    const handleConversationClick = (conversation) => {
        setUserMessages(conversation.messages);
        setResponse({ Answer: conversation.messages[conversation.messages.length - 1].text });
    };

    return (
        <div className="flex-1 justify-center items-center bg-gray-200">
            <div className="flex min-h-screen">
                <div className="flex-1 p-5 order-2">
                    <div className="text-4xl font-poppins font-semibold text-black text-center">
                        Welcome to <span className="text-blue-500">Lex.Ai</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="overflow-hidden flex flex-col justify-end gap-8 items-center sm:rounded-t-[50px] lg:rounded-[50px] p-5 bg-white w-full sm:h-screen sm:w-full">
                            {/* Main Chat Area */}
                            <div className="w-full bg-white min-h-[200px] max-h-[300px] h-auto sm:bg-white rounded-xl relative overflow-hidden shadow-lg">
                                <div className="absolute inset-0 bg-gray-200 backdrop-blur-lg opacity-75 rounded-xl"></div>
                                <div className="chat-container p-4 flex flex-col overflow-y-auto" ref={chatContainerRef}>
                                    {userMessages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`chat-bubble ${message.type === 'user' ? 'bg-white text-black' : 'bg-blue-900 text-white'
                                                } rounded-xl p-4 mb-2`}
                                        >
                                            {message.text}
                                        </div>
                                    ))}
                                    {loading ? (
                                        <span className="loading loading-dots loading-lg"></span>
                                    ) : (
                                        <div
                                            className="chat-bubble bg-blue-900 text-white rounded-xl p-4 mb-2"
                                            style={{ overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}
                                        >
                                            {response.Answer}
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Input Area */}
                            <div className="flex gap-2 mt-4">
                                <textarea
                                    className="textarea textarea-bordered textarea-sm lg:w-96 rounded-xl bg-white text-black backdrop-blur-md p-2"
                                    placeholder="Type something here"
                                    value={val}
                                    onChange={(e) => setVal(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                    rows="2"
                                    ref={textAreaRef}
                                    style={{ maxHeight: '100px' }}
                                ></textarea>
                                <button
                                    onClick={handleAi}
                                    className="bg-blue-900 hover-bg-blue-800 text-white font-semibold rounded-xl py-2 px-4"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 p-5 order-1 border-r border-white">
                    <h2 className="text-2xl font-bold text-black mb-4">Conversations</h2>
                    <ul className="overflow-y-auto max-h-screen">
                        <li
                            className="text-black cursor-pointer hover:text-gray-300 mb-2"
                            onClick={() => handleConversationClick({ title: 'New Chat', messages: [] })}
                        >
                            <button className="bg-blue-900 text-white p-2 rounded-md">
                                <span className="text-xl mr-1">+</span> New Chat
                            </button>
                        </li>
                        {conversations.map((conversation) => (
                            <li
                                key={conversation.id}
                                className="text-black cursor-pointer hover:text-gray-300 mb-2"
                                onClick={() => handleConversationClick(conversation)}
                            >
                                {conversation.title || `Conversation ${conversation.id}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LexAi;

