import React, {useState} from "react";

export default function TextForm(props) {
  const handelUpClick = ()=> {
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handelOnChange = (event)=> {
    setText(event.target.value);
    
  }
  const[text , setText] = useState('Enter Text here');
  return (
    <>
      <div class="mb-3">
        <h1>{props.heading}</h1>
        <textarea class="form-control" value = {text} onChange={handelOnChange} id="myBox" rows="12"></textarea>
        <button type="button"  class="btn btn-primary my-3" onClick={handelUpClick}>Uppercase</button>
      </div>
    </>
  );
}
