import React from "react";

export const AddTask = ({ taskList, setTaskList, tasks, setTasks }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (tasks.id) {
      //if task have any id means we are updating that particular id value
      const date = new Date();
      const updatedTaskList = taskList.map((item) =>
        item.id === tasks.id
          ? {
              id: tasks.id,
              name: tasks.name, // also can  use this e.target.task.value
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : item
      );
      setTaskList(updatedTaskList);
    } else {
      //if task have,nt any id then means we are adding the stuff
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      e.target.task.value = "";
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tasks.name} //value is from the show task and (task)updation  from update function
          placeholder="Add Task"
          maxLength="25px"
          autoComplete="off"
          onChange={(e) => setTasks({ ...tasks, name: e.target.value })}
          name="task"
        />
        <button type="submit">{tasks.id ? "Edit" : "Add"}</button>
        {/* if each  task id is equal to the selected item then edit otherwise we are adding it */}
      </form>
    </section>
  );
};
