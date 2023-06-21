type Task = {
    task: string
    // id: number
}

export default function Todoitem(props: Task) {
  return (
    <>{props.task}</>
  )
}

export type { Task }