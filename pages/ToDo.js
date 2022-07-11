import React from "react";

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTaget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} >
            {todo.task}
        </div>
    )
}

export defualt ToDo;