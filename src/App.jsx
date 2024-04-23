import React from 'react';
import "./App.css";
import Header from './Components/Header';
import HeadingSection from './Components/HeadingSection';
import Content from './Components/ContentSection';
import ContentImg from './Components/Content&Img';
import Contact from './Components/Contact';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';


const App = () =>{
  return(
    <div className='app'>
      <Header/>
      <HeadingSection/>
      <Content/>
      <ContentImg/>
      <Contact/>
      <SignUp/>
      <Footer/>
    </div>
  )
};


export default App;
