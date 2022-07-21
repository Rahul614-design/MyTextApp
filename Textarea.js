import React, {useState} from 'react'

export default function Textarea(props) {
    const [text,setText]= useState("")
const upperCase= ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert(' Text changed into upper case','success');
}
const lowerCase= ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert(' Text changed into lower case','success');
}
const clearText= ()=>{
    let newText = "";
    setText(newText);
    props.showalert(' Text cleared','danger');
}
const copyText = ()=>{
const text = document.getElementById('box');
text.select();
navigator.clipboard.writeText(text.value);
props.showalert(' Text copied','success');
}
const handleOnChange = (event)=>{
setText(event.target.value);
}
    return (
        <>
 <div className="container">  
            <h1 id='heading'>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="box" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={upperCase}>UpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>lowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy to Clipboard</button>
<button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear</button>
</div> 
<div className="container summery my-3">
    <h1>Text Summery</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    <p>{0.008*(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
</div>
    </>
  )
}
