import React, { useState, useEffect } from 'react';
import './App.css';

//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import monke from './images/monke.png';

function App() {
    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    //USE EFFECT
    //RUN ONCE when the app starts
    useEffect(() => {
        getLocalTodos();
    }, []); // STUFF HAPPENS ON RESET ONLY

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]); // STUFF HAPPENS EVERY TIME TODOS CHANGES

    //Functions
    const filterHandler = () => {
        switch(status) {
            case 'complete':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
                break;
            case 'incomplete':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };

    //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    }

    // Can only pass props and states downwards
    // i.e. app -> TodoList -> Todo with setTodos and todos
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <div className="imgcontainer">
                <img className="monke" src={monke} />
            </div>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            /> {/* This creates the todo with these parameters */}
            <TodoList
                filteredTodos={filteredTodos}
                setTodos={setTodos}
                todos={todos}
            />
        </div>
    );
}

export default App;
