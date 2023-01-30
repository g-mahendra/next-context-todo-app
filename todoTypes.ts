import { ReactNode } from "react";

export type SubTaskType = {
    task: string;
    isCompleted: boolean;
}

export type TodoType = {
    mainTask: string;
    subTasks: SubTaskType[];
    isCompleted: boolean;
}

export type ProviderProps = {
    children: ReactNode
}

export type TodoContextType = {
    todos: TodoType[];
    addTodo: (newTodo: TodoType) => void;
    updateSubTaskState: (mainTaskIndex: number, subtaskIundex: number) => void
}
