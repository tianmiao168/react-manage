import React, { useState } from 'react'

export default function Item(props) {
    const { name, done } = props
    const [flag, setFlag] = useState(false)
    const turnColor = () => {
        console.log(111);
        setFlag(true)
    }
    return (
        <li onMouseOver={turnColor} style={{ backgroundColor: flag ? "#ccc" : "white" }}>
            <label>
                <input type="checkbox" defaultChecked={done} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>删除</button>
        </li>
    )
}
