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
    const handleChange = (id) => (e) => {
        console.log(id, e.target.checked);
        props.handleDone(id, e.target.checked)
    }
    const Remove = (id) => () => {
        if (window.comfirm('确定删除吗')) {
            props.handleDelete(id)
        }

    }
    return (
        <li onMouseEnter={enter} onMouseLeave={Leave} style={{ backgroundColor: flag ? "pink" : "white" }}>
            <label>
                <input type="checkbox" defaultChecked={done} onChange={handleChange(id)} />
                <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={Remove(id)} style={{ display: flag ? "block" : "none" }}>删除</button>
        </li>
    )
}
