import React from 'react'

export default function Header(props) {
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            props.handleName(e.target.value)
            console.log(e.target.value);
        }
    }
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp} />
        </div>
    )
}
