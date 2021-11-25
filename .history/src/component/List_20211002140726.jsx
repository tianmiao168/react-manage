import React from 'react'
import Item from './Item'

export default function List() {
    const { id, name, done } = props
    return (
        <ul className="todo-main">
            <Item />
            <Item />
        </ul>
    )
}
