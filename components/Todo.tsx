import { FC, useContext, useState } from "react";
import { TodoContextType, TodoType } from "@/todoTypes";
import styles from "../styles/Todo.module.css";
import { TodoContext } from "@/context/todoContext";

type TodoProps = {
  todo: TodoType;
  index: number;
};

const Todo: FC<TodoProps> = ({ todo, index }) => {
  const [shouldShowSubTasks, setShouldShowSubTasks] = useState(false);
  const { updateSubTaskState } = useContext(TodoContext) as TodoContextType;
  const toggleSubTasks = () => setShouldShowSubTasks((prevState) => !prevState);

  const toggleSubTaskState = (subtaskIndex: number) => {
    updateSubTaskState(index, subtaskIndex);
  };

  return (
    <div key={todo.mainTask} className={styles.todo}>
      <p>
        {index + 1}. {todo.mainTask}
      </p>
      {shouldShowSubTasks && (
        <div className={styles.subTaskContainer}>
          {todo.subTasks?.length > 0 &&
            todo.subTasks.map((subTask, subTaskIndex) => {
              return (
                <div
                  key={`todoSubTask${index}${subTaskIndex}`}
                  className={styles.subTask}
                >
                  <input
                    type="checkbox"
                    checked={subTask.isCompleted}
                    id={`todoSubTask${index}${subTaskIndex}`}
                    onChange={() => {
                      toggleSubTaskState(subTaskIndex);
                    }}
                  />
                  <label htmlFor={`todoSubTask${index}${subTaskIndex}`}>
                    {subTask.task}
                  </label>
                </div>
              );
            })}
        </div>
      )}
      <button className={styles.showHideButton} onClick={toggleSubTasks}>
        {shouldShowSubTasks ? "Hide Subtasks" : "Show Subtasks"}
      </button>
    </div>
  );
};

export default Todo;
