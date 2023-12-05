// App.jsx

import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/process_input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_text: inputText }),
      });

      const responseData = await response.json();
      setOutputText(responseData.output_text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <label>
        Input:
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      <label>
        Output:
        <div>{outputText}</div>
      </label>
    </div>
  );
};

export default App;
