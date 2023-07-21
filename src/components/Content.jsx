import { useEffect, useState } from "react";
import AddTask from "./tasks/AddTask";
import TaskList from "./tasks/TaskList";

function Content() {
  const [tasks, setTasks] = useState();
  useEffect(() => {
    setTasks([
      {
        id: 1689958971131,
        title: "Create Slide and Download Necessary Images",
        isMarked: true,
      },
      {
        id: 1689959155279,
        title: "Upload in Google Drive And Share the Link",
        isMarked: false,
      },
    ]);
  }, []);
  return (
    <>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}

export default Content;
