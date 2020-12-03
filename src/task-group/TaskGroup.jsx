import React from 'react'

const TaskGroup = (props) => {
    const title = props.title ?  props.title : 'No title'
    const content = props.content ?  props.content: 'No content'

    return(
            <div className="class-group">
                <div className="task-group-title">{title}</div>
                <div className="task-group-content">{content}</div>
            </div>
        )
}

export default TaskGroup