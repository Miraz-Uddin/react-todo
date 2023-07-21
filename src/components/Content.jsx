import { useState } from "react";
import AddTask from "./tasks/AddTask";
import TaskList from "./tasks/TaskList";

function Content() {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");
  const [tasks, setTasks] = useState([]);

  const createTask = (e) => {
    e.preventDefault();
    if (task === "" || task === undefined || task === null) {
      setTaskError("Please Enter Something");
    } else {
      const newTask = {
        id: Date.now(),
        title: task,
        isMarked: false,
      };
      setTaskError("");
      setTasks([...tasks, newTask]);
      setTask("");
    }
  };
  const onChangeTaskInput = (e) => {
    setTaskError("");
    setTask(e.target.value);
  };
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };
  const markComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isMarked: true };
      }
      return { ...task };
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <AddTask
        task={task}
        createTask={createTask}
        onChangeTaskInput={onChangeTaskInput}
        taskError={taskError}
        setTaskError={setTaskError}
      />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        markComplete={markComplete}
      />
    </>
  );
}

export default Content;
