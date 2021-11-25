import React from 'react'

export default function Footer(props) {
    const { n, length } = props
    console.log(n);
    const removeSelect = () => {
        props.handleSelect()
    }
    const allChange = (e) => {

        console.log(e.target.checked);
    }
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={allChange} />
            </label>
            <span>
                <span>已完成{n}</span> / 全部 {length}
            </span>
            <button className="btn btn-danger" onClick={removeSelect}>清除已完成任务</button>
        </div>
    )
}
