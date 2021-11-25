import React from 'react'

export default function Header() {
    const handleKeyUp = (e) => {
        if (e.target.keyCode === 13) {
            console.log(e.target.value);
        }
    }
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp} />
        </div>
    )
}
