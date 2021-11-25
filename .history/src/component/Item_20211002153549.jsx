import React, { useState } from 'react'

export default function Item(props) {
    const { name, done } = props
    const [flag, setFlag] = useState(false)
    const enter = () => {
        console.log(111);
        setFlag(true)
    }
    const Leave = () => {
        setFlag(false)
    }
    return (
        <li onMouseEnter={enter} onMouseLeave={Leave} style={{ backgroundColor: flag ? "#ccc" : "white" }}>
            <label>
                <input type="checkbox" defaultChecked={done} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: "none" }}>删除</button>
        </li>
    )
}
