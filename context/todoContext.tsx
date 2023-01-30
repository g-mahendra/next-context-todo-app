import { ProviderProps, TodoContextType, TodoType } from "@/todoTypes";
import React, { createContext, useState, FC } from "react";

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoContextProvider: FC<ProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (newTodo: TodoType) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateSubTaskState = (mainTaskIndex: number, subtaskIndex: number) => {
    const newTodos = [...todos];

    const newSubtasks = newTodos[mainTaskIndex].subTasks;
    newSubtasks[subtaskIndex].isCompleted =
      !newSubtasks[subtaskIndex].isCompleted;

    newTodos[mainTaskIndex].subTasks = newSubtasks;
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateSubTaskState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
