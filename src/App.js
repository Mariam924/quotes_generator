import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

function App() {

  const [content, setContent] = useState("But what is liberty without wisdom, and without virtue? It is the greatest of all possible evils; for it is folly, vice, and madness, without tuition or restraint.");
  const [author, setAuthor] = useState("Edmund Burke");

  function getNewQuote() {
    axios.get("https://api.quotable.io/random").then((response) => {
        const result = response.data;
        setContent(result.content);
        setAuthor(result.author);
      });
  }

  return (
    <div className="main-app d-flex justify-content-center align-items-center">
      <div className="main-content p-5 d-flex justify-content-center align-items-center"> 

        <div> 
        <h1 className="title">Quote App Generator</h1>
        <p className="quotes">{content}</p>
        <span className="author">{author} </span>
        <Button variant="primary mt-3 w-100 py-3 fw-bold" onClick={getNewQuote}>New Quote</Button>
        </div>

      </div>
    </div>
  );
}

export default App;

