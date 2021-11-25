import React from 'react'

export default function Footer(props) {
    const { n, length, isCheck } = props
    console.log(n);
    const removeSelect = () => {
        props.handleSelect()
    }
    const allChange = (e) => {
        const AllBtn = e.target.checked;
        console.log(e.target.checked);
        props.AllChange(AllBtn)
    }
    return (
        <div className="todo-footer">
            <label>
                <input type="checkbox" onChange={allChange} checked={ } />
            </label>
            <span>
                <span>已完成{n}</span> / 全部 {length}
            </span>
            <button className="btn btn-danger" onClick={removeSelect}>清除已完成任务</button>
        </div>
    )
}
