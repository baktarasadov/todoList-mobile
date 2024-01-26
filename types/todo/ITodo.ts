import { ReactNode } from "react"

interface Base {
    deleteTodo: (id: number) => void
}

export interface ITodo {
    id: number
    text: string
}

export interface ITodoList extends Base {
    todos: ITodo[]
}

export interface ITodoItem extends Base {
    id: number
    children: React.ReactNode
}