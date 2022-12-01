import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Search from './components/Search';


// export default class App extends Component
const App = () => {

  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <Search />
        <LoadingBar color='#ffffff' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={9} country="in" category="news" />} />
          <Route exact path="/finance" element={<News apiKey={apiKey} setProgress={setProgress} key="finance" pageSize={9} country="in" category="finance" />} />
          <Route exact path="/food" element={<News apiKey={apiKey} setProgress={setProgress} key="food" pageSize={9} country="in" category="food" />} />
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
          <Route exact path="/music" element={<News apiKey={apiKey} setProgress={setProgress} key="music" pageSize={9} country="in" category="music" />} />
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={9} country="in" category="science" />} />
          <Route exact path="/sport" element={<News apiKey={apiKey} setProgress={setProgress} key="sport" pageSize={9} country="in" category="sport" />} />
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={9} country="in" category="technology" />} />
          <Route exact path="/gaming" element={<News apiKey={apiKey} setProgress={setProgress} key="gaming" pageSize={9} country="in" category="gaming" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App