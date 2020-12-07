import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    //Here I can write javascript code and functions
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();/*Prevents refresh*/
        setTodos([
            ...todos,
            {
                text: inputText,
                complete: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    };

    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
