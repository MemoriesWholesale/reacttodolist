type Task = {
    task: string
    // id: number
    details?: string
}

export default function Todoitem(props: Task) {
  return (
    <>{props.task}</>
  )
}

export type { Task }