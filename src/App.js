import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch  
// } from "react-router-dom";
function App() {
  const [mode, setmode]= useState('light');
  const togglemode =() =>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark mode has been enabled', "success");
      document.title="TextUtils-Drakmode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  const [alert, setAlert]= useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  return (
    <>
    {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} togglemode={togglemode} abouttxt="About" /> 
     <Alert alert= {alert}/>
     <div className="container my-3"> 
   
   {/* <Switch>
          <Route exact path="/about"> 
             <About /> 
          </Route> 
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter,Character Counter,Remove Extra Spaces" mode={mode}/>   
          {/* </Route>
        </Switch> */}
      {/* <About/> */}
     </div>
     {/* </Router> */}
    </>
  );
}

export default App;
