import React, {useState} from "react";
import "./App.css";
// Importing Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {

  const [textInput, setTextInput] = useState("")

  return (
    <div className="App">
      <header>
        <h1>Mark's Todo List {textInput} </h1>
      </header>
        <Form setTextInput={setTextInput}/>
        <TodoList/>
    </div>
  );
}

export default App;
