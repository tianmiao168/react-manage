import React from 'react'
import Item from './Item'

export default function List() {
    return (
        <ul className="todo-main">
            <Item />
            <Item />
        </ul>
    )
}
