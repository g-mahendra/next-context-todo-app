import { TodoContext } from "@/context/todoContext";
import { TodoContextType } from "@/todoTypes";
import { FC, useContext, useState } from "react";
import styles from "../styles/TodoList.module.css";
import Todo from "./Todo";

const TodoList: FC = () => {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return (
    <div className={styles.todoListContainer}>
      {todos?.length > 0 && (
        <>
          <div style={{ marginBottom: "20px", padding: "10px 0" }}>
            TodoList
          </div>
          <div className={styles.todoGrid}>
            {todos.map((todo, index) => {
              return (
                <Todo
                  key={`${todo.mainTask}${index}`}
                  todo={todo}
                  index={index}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
