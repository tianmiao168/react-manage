import React from 'react'
import Item from './Item'

export default function List(props) {
    const todos = props
    todos.map((todo) => {
        return (
            <ul className="todo-main">

                <Item />
                <Item />
            </ul>
        )
    })

}
