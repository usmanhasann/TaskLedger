import "./App.css";
import { Header } from "./components/Header";
import { ShowTask } from "./components/ShowTask";
import { AddTask } from "./components/AddTask";
import { useEffect, useState } from "react";

const App = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [tasks, setTasks] = useState({});
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <>
      <div className="App">
        <Header />
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
    </>
  );
};
export default App;
