import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ handleTodoInput }) => {
    const [todoinput, setTodoinput] = useState("");

    const todoinputChange = (event) => {
        setTodoinput(event.target.value);
    };

    const inputForm = (event) => {
        event.preventDefault();
        handleTodoInput(todoinput);
    };

    return (
        <form className="todoform" onSubmit={inputForm}>
            <label htmlFor="todoinput">Rentrer une nouvelle Todo</label>
            <input
                className="todoinput"
                name="todoinput"
                type="text"
                placeholder="todo..."
                value={todoinput}
                onChange={todoinputChange}
            />
            <button className="todobutton" type="submit">Ajouter</button>
        </form>
    );
};

export default TodoForm;
