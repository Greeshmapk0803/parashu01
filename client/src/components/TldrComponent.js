import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const options = {
      method: 'POST',
      url: 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'fcf655d6b3msh58afe1a09318cddp154941jsn435519174017',
        'X-RapidAPI-Host': 'tldrthis.p.rapidapi.com'
      },
      data: {
        url: 'https://www.cfr.org/global-conflict-tracker/conflict/conflict-between-india-and-pakistan',
        min_length: 100,
        max_length: 300,
        is_detailed: false
      }
    };

    try {
      const response = await axios.request(options);
      setSummary(response.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Summarized Content:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img  src= {summary.article_image}/>
          <p style = {{color:"white"}}>{summary.article_text}</p>
        </div>
      )}
      <button onClick={fetchData}>Fetch Summary</button>
    </div>
  );
}

export default App;
