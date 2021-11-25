import React, { useState } from 'react'

export default function Item(props) {
    const { id, name, done } = props
    const [flag, setFlag] = useState(false)
    const enter = () => {
        console.log(111);
        setFlag(true)
    }
    const Leave = () => {
        setFlag(false)
    }
    const handleChange = () => (e) => {
        console.log(e.target.checked);
    }
    return (
        <li onMouseEnter={enter} onMouseLeave={Leave} style={{ backgroundColor: flag ? "pink" : "white" }}>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={handleChange(id)} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: flag ? "block" : "none" }}>删除</button>
        </li>
    )
}
