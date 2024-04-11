import './App.css';
import Header from "./components/layout/Header/Header.js";
import {BrowserRouter as Router} from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./components/layout/Footer/Footer.js"


function App() {

  
React.useEffect(()=>{
  WebFont.load({
    google:{
      families: ["Roboto", "Droid Dans", "Chilanka"],
    },
  });
});


  return (
    <Router>
      <Header />

      <Footer />
    </Router>
  );
}

export default App;
