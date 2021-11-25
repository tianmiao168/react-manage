import React from 'react'

export default function Footer(props) {
    const { n, length } = props
    console.log(n);
    const removeSelect = () => {

    }
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" />
            </label>
            <span>
                <span>已完成{n}</span> / 全部 {length}
            </span>
            <button className="btn btn-danger" onClick={removeSelect}>清除已完成任务</button>
        </div>
    )
}
