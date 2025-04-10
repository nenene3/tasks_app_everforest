import React from 'react'
import { type TaskType } from './TaskType'
import Card from '../../components/Card'

type Props = {
    task:TaskType
}

const Task = ({task}: Props) => {
  return (
    <Card>
        <h2>{task.title}</h2>
        <p>{task.content}</p>
    </Card>
  )
}

export default Task