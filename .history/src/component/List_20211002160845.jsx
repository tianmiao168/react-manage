import React from 'react'
import Item from './Item'

export default function List(props) {
    const todos = props.todos
    const handleDone = props.handleDone
    return (
        <ul className="todo-main">
            {todos.map((todo) => {
                return <Item key={todo.id} {...todo} handleDone={handleDone} />
            })}

        </ul>
    )
}
