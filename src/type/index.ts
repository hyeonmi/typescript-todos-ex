
export interface ITodo {
    id: string
    text: string
    done: boolean
}

export interface IMainPageProps {
    children?: React.ReactNode
}

export interface ITodoInputProps {
    value: string
    onChange: (e: React.ChangeEvent) => void
    onInsert: () => void
}

export interface ITodoListProps {
    todos: ITodo[]
    onToggle: (todoId: string) => void
    onRemove: (todoId: string) => void
}

export interface ITodoItemProps {
    todo: ITodo
    onToggle: (todoId: string) => void
    onRemove: (todoId: string) => void
}