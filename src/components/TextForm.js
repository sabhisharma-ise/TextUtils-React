import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase button clicked");
        setText((text) => text.toUpperCase());
    };

    const handleLoClick = () => {
        // console.log("Lowercase button clicked");
        setText((text) => text.toLowerCase());
    };

    const handleOnChange = (event) => {
        // console.log('OnChange');
        setText(event.target.value);
    };

    const [text, setText] = useState("");

    return (
        <>
            <div>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
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
