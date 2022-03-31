import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(48 83 142 / 87%)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      <Alert alert="This is alert" />
      <div className="container my-3">
        {/* <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Routes> */}
            {/* <Route exact path='/' element={<TextForm heading="Enter the text" />} /> */}
            {/* <Route path='/about' element={<About />} />

          </Routes>



        </Router> */}
        <TextForm heading="Enter the text" />
      </div>
    </>


  );

}

export default App;
