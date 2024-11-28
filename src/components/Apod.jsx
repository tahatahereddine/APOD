import { useEffect, useState } from 'react';
import '../styles/Apod.css';  

function Apod({ date }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;

    fetch(URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTPS: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, [date]);

  if (error) {
    return <div style={{color: red}}>Error: {error}</div>;
  }

  if (!data) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className="apod-container">
      <h1>{data.title}</h1>
      <p className='apod-meta'>-- Date: {data.date} -- par: {data.copyright}</p>
      <hr />
      <div className="apod-content">
        {data.media_type === "image" ? (
          <img src={data.url} alt={data.title} className="apod-image" />
        ) : (
          <iframe
            width="200px"
            src={data.url}
            title={data.title}
            className="apod-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
        <div className="apod-explanation">
          <h2>Explication:</h2>
          <p>{data.explanation}</p>
        </div>
      </div>
=    </div>
  );
}

export default Apod;