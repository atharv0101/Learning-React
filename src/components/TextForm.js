import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleDelClick = () => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handelSpecialChar = () => {
    let newtext = (text.replace(/[^\w\s]|_/g, ""));
    setText(newtext);
  }
  const handelSpaceRemoval = () => {
    let newtext = (text.replace(/\s+/g, " "));
    setText(newtext);
  }
  const Dictation = () => {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
      return <span>Browser doesn't support speech recognition.</span>;
    }
    const handleAppendTranscript = () => {
      setText((prevText) => prevText + " " + transcript);
      resetTranscript(); // Clear the current transcript
    };

    return (
      <div>
        <h2>Speach To Text</h2>
        <button className="btn btn-light my-1 mx-2" onClick={SpeechRecognition.startListening}>Start Speaking</button>
        <button className="btn btn-light my-1 mx-2" onClick={SpeechRecognition.stopListening}>Stop Speaking</button>
        <button className="btn btn-light my-1 mx-2" onClick={handleAppendTranscript}>Add Transcript</button>
        <button className="btn btn-danger my-1 mx-2" onClick={resetTranscript}>Reset Transcript</button>
        <p><i>{transcript}</i></p>
      </div>
    );
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control" value={text} onChange={handleOnChange} id="myBox"rows="12"
        ></textarea>
        <button type="button" className="btn btn-light my-2 mx-2" onClick={handleUpClick}>Uppercase</button>
        <button type="button" className="btn btn-light my-2 mx-2" onClick={handleLowClick}>Lowercase</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handelSpecialChar}>Remove Special Characters</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={handelSpaceRemoval}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-secondary my-2 mx-2" onClick={() => navigator.clipboard.writeText(text)}>Copy Text</button>
        <button type="button" className="btn btn-danger my-2 mx-2" onClick={handleDelClick}>Delete</button>
        <Dictation/>
      </div>


      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {text.length}</p>
      <p>
        <b>
          Approx Read Time:{" "}
          {wordCount > 125
           ? `${(0.008 * wordCount).toFixed(0)} Mins`
           : `${(0.008 * wordCount * 60).toFixed(2)} Seconds`}
        </b>
      </p>
      </div>
    </> 
  );
}
