import './App.css';
import FormVideo from './form'; 
import {Button} from "react-bootstrap"
import { useState } from 'react';

function App() {
  const[show,setShow]=useState(false)

  const showForm=()=>{
    setShow(true)
  }

  return (
    <>
    <div className="container1">
    <h1 className="header">Convert .Mp4 to HLS(m3u8) File </h1>
    {(!show)?<Button className="new" variant="success" onClick={showForm}>Create NEW Project</Button>:null}
    <div className="form">
    {(show)?<FormVideo/>:null}
    </div>
    </div>
    </>
  );
}

export default App;