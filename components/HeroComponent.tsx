import React from "react";
import { SubTaskType, TodoContextType } from "@/todoTypes";
import { TodoContext } from "@/context/todoContext";
import { useContext, useRef, useState } from "react";
import styles from "../styles/HeroComponent.module.css";

const HeroComponent = () => {
  let inputRef = useRef<HTMLInputElement | null>(null);
  let subTaskInputRef = useRef<HTMLInputElement | null>(null);
  const [hasSubTasks, setHasSubTasks] = useState<boolean>(false);
  const { addTodo } = useContext(TodoContext) as TodoContextType;
  const [subTasks, setSubTasks] = useState<SubTaskType[]>([]);
  const toggleHasSubTasks = () => setHasSubTasks((prevState) => !prevState);

  const addSubTask = () => {
    if (subTaskInputRef.current) {
      if (!subTaskInputRef.current.value.trim()) {
        subTaskInputRef.current.value = "";
        return;
      }
      let subTask = subTaskInputRef.current.value;
      setSubTasks((prevState) => [
        ...prevState,
        {
          task: `${subTask}`,
          isCompleted: false,
        },
      ]);
      subTaskInputRef.current.value = "";
    }
  };

  const removeSubTask = (index: number) => {
    setSubTasks((prevSUbTasks) =>
      prevSUbTasks.filter((_, idx) => idx !== index)
    );
  };

  const onAddtodoClick = () => {
    if (inputRef.current) {
      if (inputRef.current.value.trim() === "") {
        inputRef.current.value = "";
        return;
      }
      addTodo({
        mainTask: `${inputRef.current.value}`,
        isCompleted: false,
        subTasks,
      });
    }
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (subTaskInputRef.current) {
      subTaskInputRef.current.value = "";
    }
    toggleHasSubTasks();
    setSubTasks([]);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <h2>Enter the task bellow</h2>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.mainTaskInput}
            ref={inputRef}
            placeholder="Please enter a main task"
          />
        </div>
        <div className={styles.subtaskChoice}>
          <input
            checked={hasSubTasks}
            onChange={toggleHasSubTasks}
            id="subtaskCheckBox"
            type="checkbox"
          />
          <label htmlFor="subtaskCheckBox">
            I have sub tasks for this task
          </label>
        </div>
        {hasSubTasks && (
          <div className={styles.subTaskBox}>
            <label htmlFor="subtask">Enter Subtask</label>
            <div className={styles.subTaskInputContainer}>
              <input
                className={styles.subTaskInput}
                id="subtask"
                type="text"
                ref={subTaskInputRef}
                placeholder="Enter a subtask here"
              />
              <button onClick={addSubTask} className={styles.subTaskAddButton}>
                Add
              </button>
            </div>
            {subTasks?.length > 0 && <p>Subtasks</p>}
            <div className={styles.subTasks}>
              {subTasks?.length > 0 && (
                <>
                  {subTasks.map((subTask, index) => {
                    return (
                      <div key={subTask.task} className={styles.subTaskStrip}>
                        <p>
                          {index + 1}. {subTask.task}
                        </p>
                        <button onClick={() => removeSubTask(index)}>
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        )}
        <button onClick={onAddtodoClick} className={styles.addButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
