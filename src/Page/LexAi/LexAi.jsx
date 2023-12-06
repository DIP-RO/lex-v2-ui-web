
import { useEffect, useRef, useState } from 'react';
const LexAi = () => {

    const [userPrompt, setUserPrompt] = useState('');
    const [response, setResponse] = useState({ Prompt: 'None', Answer: 'None', Sources: [] });
    const [loading, setLoading] = useState(false);

    const textAreaRef = useRef(null);
    const [val, setVal] = useState("");
    const handleChange = (e) => {
        setVal(e.target.value);
        setUserPrompt(e.target.value);
    }

    useEffect(() => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    }, [val])


    // Set up the headers
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json'); // Adjust the content type as needed
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:5173'); // Add the required CORS header

    const handleAi = async () =>  {
        setLoading(true);
        console.log(userPrompt);
        try {
            const response = await fetch('http://localhost:5110/api/prompt_route', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ user_prompt: userPrompt }),
            });
            const data = await response.json();
            setResponse(data);
            console.log(data);
          } catch (error) {
            console.error('Error submitting prompt:', error);
          }
          finally {
            setLoading(false);
          }
    }

    return (
        <div className="flex-1 justify-center items-center ">

            <div className=" bg-[#212222] sm:min-h-screen min-h-screen">

                <div className="text-4xl font-['Inter'] font-semibold text-white p-5 text-center">
                    Welcome to LEX-AI
                </div>
                
                <div className="flex justify-center items-center ">
                    <div className="border-solid overflow-hidden  flex flex-col justify-center gap-8  items-center   sm:rounded-t-[35px] lg:rounded-[35px]   p-5 bg-white w-3/4 sm:h-screen sm:w-full sm:bg-[#2533416c]">


                        <div className="w-3/4 bg-white h-72 sm:bg-[#2533416c]">

                            <div className="chat chat-start mt-10">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://i.ibb.co/kg3X7W8/photo-2023-05-15-00-28-43.jpg" />
                                    </div>
                                </div>
                                    
                                {loading ? <span className="loading loading-dots loading-lg"></span> : <div className="chat-bubble bg-black text-white">{response.Answer}</div>}

                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <textarea className='textarea textarea-bordered textarea-sm lg:w-96 rounded' placeholder='type something here' value={val} onChange={handleChange} rows="2" ref={textAreaRef}></textarea>
                            </div>
                            <div className="lg:mb-10">
                                <button onClick={handleAi}>
                                    <img
                                        src="https://i.ibb.co/5GP4ytS/Polygon-1-1.png"
                                        id="PolygonRoot"
                                        className="origin-top-left ] w-7 h-7 mt-2"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LexAi;