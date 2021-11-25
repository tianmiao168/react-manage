import React from 'react'

export default function Footer(props) {
    const n = props.n
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" />
            </label>
            <span>
                <span>已完成{n}</span> / 全部2
            </span>
            <button className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
