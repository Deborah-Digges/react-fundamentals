// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import { useState } from 'react';

function UsernameForm({onSubmitUsername, setUserName, userName}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(event.target.elements.userNameInput.value);
  }
  
  const handleChange = (event) => {
    const input = (event.target.value || "").toLowerCase();
    setUserName(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userNameInput">Username:</label>
        <input onChange={handleChange} value={userName} type="text" id="userNameInput" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const [ userName, setUserName] = useState("");

  const onSubmitUsername = () => { 
    alert(`You entered: ${userName}`); 
  }
  return (
    <>
      <UsernameForm setUserName={setUserName} onSubmitUsername={onSubmitUsername} userName={userName}/>      
    </>
  
  );
}

export default App
