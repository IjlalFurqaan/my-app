import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        // console.log("Upper Case was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClear = () => {
        // console.log("Upper Case was clicked" + text)
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("Upper Case was Changed")
        setText(event.target.value)
    }

    const [text, setText] = useState(" ");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                <button className="btn btn-success mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
                <button className="btn btn-danger mx-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container my-5">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 *text.split(" ").length} minute read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
