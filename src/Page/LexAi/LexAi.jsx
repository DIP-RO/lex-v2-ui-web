import  { useEffect, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
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
    const examples = [
        'What are the penalties for cybercrime in Bangladesh?',
        'How can I protect myself from phishing attacks?',


    ]
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

        // Check if the input matches any predefined examples
        const predefinedResponse = getPredefinedResponse(val);
        if (predefinedResponse) {
            // Simulate a delay before showing the predefined response
            setTimeout(() => {
                setResponse({ Answer: predefinedResponse });
                updateConversations(userMessage, { Answer: predefinedResponse });
                setLoading(false);
                setVal('');
            }, 2000);
            return;
        }

        try {
            // Your API call logic goes here...
            // Simulate a delay for loading
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Simulate a response from the API
            const aiRes = 'Simulated AI response. Replace this with actual API response.';

            setResponse({ Answer: aiRes });
            updateConversations(userMessage, { Answer: aiRes });
        } catch (error) {
            console.error('Error submitting prompt:', error);
        } finally {
            setLoading(false);
            setVal('');
        }
    };

    const getPredefinedResponse = (userInput) => {
        const predefinedResponses = {
            'What are the penalties for cybercrime in Bangladesh?': 'The penalties for cybercrime in Bangladesh vary depending on the severity of the offense. The maximum penalty for a cybercrime is life imprisonment and a fine of BDT 100 crore (approximately USD 1.2 million).', // Add your responses here
            'How can I protect myself from phishing attacks?': 'Be cautious of unsolicited emails and links, especially from unknown senders.Hover over hyperlinks to see the actual destination URL before clicking.Look for typos and grammatical errors in the email content.'// Add your responses here
            // Add more predefined responses as needed
        };

        return predefinedResponses[userInput];
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
        <div className="flex-1 justify-center items-center">
            <div className="flex bg-[#f5f1f1] min-h-screen">
                <div className="w-1/5 p-5 order-3 border-l border-[#04364A]">
                    <h2 className="text-2xl font-bold  mb-4">Conversations</h2>
                    <ul className="overflow-y-auto max-h-screen">
                        <li
                            className="text-white cursor-pointer hover:text-gray-300 mb-2"
                            onClick={() => handleConversationClick({ title: 'New Chat', messages: [] })}
                        >
                            <button className="bg-[#343a40] transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#b69d74] text-white p-2 rounded-md">
                                <span className="text-xl mr-1">+</span> New Chat
                            </button>
                        </li>
                        {conversations.map((conversation) => (
                            <li
                                key={conversation.id}
                                className="text-white cursor-pointer hover:text-gray-300 mb-2"
                                onClick={() => handleConversationClick(conversation)}
                            >
                                {conversation.title || `Conversation ${conversation.id}`}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-5 order-2">
                    <div className="text-4xl font-bold text-center mb-5">
                        Welcome to <span className="text-blue-500">Lex.Ai</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="border-solid overflow-hidden flex flex-col justify-end gap-8 items-center sm:rounded-t-[50px] lg:rounded-[50px] p-5 bg-[#212222] w-full sm:h-screen sm:w-full">
                            <div className="mt-5 w-full bg-[#f5f1f1] min-h-[380px] h-auto sm:bg-[#04364A] rounded-xl relative overflow-hidden shadow-lg">
                                <div className="absolute inset-0  backdrop-blur-lg opacity-75 rounded-xl"></div>
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
                                            <TypeAnimation
                                                splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
                                                sequence={[
                                                    `${response.Answer}`,
                                                    30000000,
                                                    '',
                                                ]}
                                                speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
                                                // omitDeletionAnimation={true}
                                                style={{ fontSize: '1em', display: 'block', }}
                                                
                                            />
                                            
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                {
                                    examples.map((item, index) => (
                                        <div key={index} className=' text-lg font-light mt-4 p-4 border rounded cursor-pointer min-w-[400px] hover:bg-slate-800 text-white' onClick={() => setVal(item)}>{item}</div>
                                    ))
                                }
                            </div>
                            <div className="flex gap-2 mt-4">
                                <div className=' h-[80%] flex flex-col justify-center items-center text-white'>


                                </div>
                                <div className="relative flex-1">
                                    <textarea
                                        className="textarea textarea-bordered textarea-sm lg:w-96 rounded-xl   backdrop-blur-md p-2 pr-10"
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
                                        className="mt-3 h-14 absolute inset-y-0 right-0 bg-[#b69d74]  transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#343a40] text-white font-semibold rounded-xl py-2 px-4"
                                    >
                                        <FiArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LexAi;
