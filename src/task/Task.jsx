import React from 'react'
import './Task.css'


 const Task = (props) => {
    const title = props.title ?  props.title : 'No title'
    const content = props.content ?  props.content: 'No content'

    return(
        <div className='task-box'>
            <div className='task-title'>{title}</div>
            <div className='task-content'>{content}</div>
            
        </div>
    )
}
export default Task