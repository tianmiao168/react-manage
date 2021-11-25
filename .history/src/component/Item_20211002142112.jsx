import React from 'react'

export default function Item(props) {
    const { name } = props
    return (
        <li>
            <label>
                <input type="checkbox" />
                <span>xx</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>删除</button>
        </li>
    )
}
