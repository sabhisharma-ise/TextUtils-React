import React, { useState } from "react";

export default function TextForm(props) {

    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = () => {
        setText((text) => text.toUpperCase());
    };

    const handleLoClick = () => {
        setText((text) => text.toLowerCase());
    };

    const handleClearClick = () => {
        setText('');
    }

    const handleCopyClick = () => { 
        navigator.clipboard.writeText(text);
    }

    const handleSpeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);        
    }

    const handleCancelSpeech=()=>{
        speechSynthesis.cancel()
    }
    
    return (
        <>
            <div>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                    Clear Text
                </button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
                    Copy to Clipboard
                </button>

                <br />

                <button className="btn btn-primary mx-1 my-1" onClick={handleSpeakClick}>
                    Read aloud
                </button>

                <button className="btn btn-primary mx-1 my-1" onClick={handleCancelSpeech}>
                    Cancel Speech
                </button>
                
            </div>

            <div className="container my-3">
                <h2>Your text summary</h2>

                <p>
                    <b>{text === "" ? 0 : text.split(" ").length}</b> words, <b>{text.length}</b> characters
                </p>

                <p> <b>{text === "" ? 0 : 0.008 * text.split(" ").length}</b> Minutes read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
