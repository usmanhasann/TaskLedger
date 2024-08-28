export const ShowTask = ({ taskList, setTaskList, tasks, setTasks }) => {
  // Every time component rerender it will re-render the whole li
  const hadnleEdit = (id) => {
    const selectedItem = taskList.find((item) => item.id === id);
    setTasks(selectedItem);
  };

  const handleDelete = (id) => {
    const updateTaskList = taskList.filter((item) => item.id !== id);
    setTaskList(updateTaskList);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">TOdo</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button onClick={() => setTaskList([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {taskList.map((item) => (
          <li key={item.id}>
            <p>
              <span className="name">{item.name} </span>
              <span className="time">{item.time}</span>
            </p>
            <i
              onClick={() => hadnleEdit(item.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(item.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
