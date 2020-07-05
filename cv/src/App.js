import React from 'react';
import './App.css';
import cv from "./assets/Pavel_Andreikovets.docx"

function App() {
    return (
        <div className="intro">
            <span>Hi there!</span><br/>
            <span>My name is <span className="highlight">Pavel Andreikovets</span> and I'm <span
                className="highlight">React Frontend Developer</span>, man!</span><br/>
            <span>Instead of many words look into my CV <a
                download={true}
                href={cv}>
             <span className="highlight-red">here</span></a>.</span>
        </div>

    );
}

export default App;
