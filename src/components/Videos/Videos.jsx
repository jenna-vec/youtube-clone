import * as React from 'react';

export default function Video({id, title, description}) {

  let url = "https://www.youtube.com/embed/" + id;

  const renderResults = () => (
    <div className='result'>
      <iframe title="Our Result" src={url} frameBorder="0" allowFullScreen />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );

  return (
      <div className='page'>
            <div className='video-results'>
              { id === "" ? <p>Search for a Youtube ID</p> : renderResults() }
            </div>
      </div>
  );
}