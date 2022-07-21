// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Navbar from 'Navbar';
import Textarea from 'Textarea';
import Alert from 'Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [switchLabel, setswitchLabel] = useState('Light Mode');
  const [alert, setAlert]= useState(null);
const showalert = (message,type)=>{
    setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1000);
  }
  const darkMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      setswitchLabel('Dark Mode');
      document.body.style.backgroundColor = '#343a40'
      document.getElementById('box').style.backgroundColor='#343a40';
      document.getElementById('box').style.color='white';
      document.body.style.color = 'white';
      showalert(' Dark mode enabled', 'success');
    }
    else{
      setMode('light');
      setswitchLabel('Light Mode');
      document.body.style.backgroundColor = 'white';
      document.getElementById('box').style.backgroundColor='white';
      document.getElementById('box').style.color='black';
      document.body.style.color = 'black';
      showalert(' Light mode enabled', 'success');
    }
    console.log(mode);
  }
  return (
    <>
      <Navbar title="My Text App" about="About Us" mode={mode} Label={switchLabel} switchMode={darkMode}/>
      <Alert alert={alert}/>
    <Textarea heading="Enter text" showalert={showalert}/>
    
</>
  );
}

export default App;
