import React, {useState} from 'react';
import './App.css';

//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="App">
            <header>
                <h1>Joey's Todo List</h1>
            </header>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
            /> {/* This creates the todo with these parameters */}
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
