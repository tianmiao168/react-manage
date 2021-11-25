import React from 'react'

export default function Item(props) {
    const { name, done } = props
    return (
        <li>
            <label>
                <input type="checkbox" checked={done} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>删除</button>
        </li>
    )
}
