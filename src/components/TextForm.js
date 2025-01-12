import React, {useState} from "react";

export default function TextForm(props) {
  const handelUpClick = ()=> {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handelLowClick = ()=> {
    let newtext = text.toLowerCase();
    setText(newtext);
  } 
  const handelOnChange = (event)=> {
    setText(event.target.value);
    
  }
  const[text,setText] = useState('');
  return (
    <>
      <div class="mb-3">
        <h1>{props.heading}</h1>
        <textarea class="form-control" value = {text} onChange={handelOnChange} id="myBox" rows="12"></textarea>
        <button type="button"  class="btn btn-primary my-3 mx-2" onClick={handelUpClick}>Uppercase</button>
        <button type="button"  class="btn btn-primary my-3 mx-2" onClick={handelLowClick}>Lowercase</button>
      </div>

      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>Word Count: {text.split (" ").length}</p>
        <p>Character Count: {text.length}</p>
        <p> <b>Approx Read Time: {0.008*text.split (" ").length} Mins </b></p>
      </div>
    </>
  );
}
