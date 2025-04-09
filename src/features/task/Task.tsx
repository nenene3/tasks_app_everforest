import React from 'react'
import { type TaskType } from './TaskType'
import Card from '../../components/Card'

type Props = {
    task:TaskType
}

const Task = ({task}: Props) => {
  return (
    <Card>
        {task.title}
        <br/>
        {task.content}
    </Card>
  )
}

export default Task