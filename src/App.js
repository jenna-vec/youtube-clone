
import './App.css';
import { useState } from 'react';
import { Navbar, Video } from './components'
import YTSearch from 'youtube-api-search';
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {

  const [videoId, setVideoId] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoHistory, setVideoHistory] = useState([]);
  let history = [];

  //On Video ID Input
  const getResults = (e) => {
    setSearchResult(videoId);
    YTSearch({key: API_KEY, term: videoId}, (data) => {
      setTitle(data[0].snippet.title);
      setDescription(data[0].snippet.description);
      let video = {
        Title: data[0].snippet.title,
        ID: data[0].id.videoId
      }
      history.push(video);
      setVideoHistory([...videoHistory, video]);
    });
  }

  return (
    <div className="App">
      <Navbar
        onInput={id => setVideoId(id)}
        getResults={getResults}
        history={videoHistory}
      />
      <Video id={searchResult} title={title} description={description} />
      <div className="footer">
        <small>Jenna LeFort for Blingby</small>
      </div>
    </div>
  );
}

export default App;
