import { ReactNode } from "react"

export interface ITodo {
    id: number
    text: string
}

export interface ITodoList {
    todos: ITodo[]
}

export interface ITodoItem {
    children: React.ReactNode
}