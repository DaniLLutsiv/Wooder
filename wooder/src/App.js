import React from 'react';
import './App.css';
import Cover from './Components/Cover/Cover';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Quality from './Components/Quality/Quality';
import Video from './Components/Video/Video';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';



function App() {
  return (
      <div className="App">
        <Header/>
        <Cover/>
        <Body/>
        <Quality/>
        <Video/>
        <About/>
        <Footer/>
      </div>
  );
}

export default App;
