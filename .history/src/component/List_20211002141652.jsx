import React from 'react'
import Item from './Item'

export default function List(props) {
    const todos = props.todos
    return (
        <ul className="todo-main">
            {todos.map((todo) => {
                return <Item />
            })}

        </ul>
    )
}
