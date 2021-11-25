import React from 'react'
import { nanoid } from 'nanoid';

export default function Header(props) {
    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            if (e.target.value.trim() !== '') {
                const handleValue = { id: nanoid(), name: e.target.value, done: false }
                props.handleName(handleValue)
                console.log(e.target.value);
            }
            else {
                alert(' 请输入内容')
            }

        }
    }
    return (
        <div className="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={handleKeyUp} />
        </div>
    )
}
