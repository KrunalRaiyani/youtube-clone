import './App.css';
import Navbar from './components/Navbar';
import { AppProvider } from './context/context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './Pages/Video';
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import LoadingBar from 'react-top-loading-bar'
import {  useState } from 'react';


function App() {

  const [progress, setProgress] = useState(10)

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Navbar setProgress={setProgress} />
          <Routes>
            <Route exact path="/" key="home" element={<Home  setProgress={setProgress} />} ></Route>
            <Route exact path="/search" key="search" element={<SearchPage setProgress={setProgress} key= "searchPage" />} ></Route>
            <Route exact path="/video" key="video" element={<Video setProgress={setProgress} />} ></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
