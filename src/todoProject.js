import TodoTask from "./todoTask";

const createProject = (
  id,
  name,
  description,
  todoTasks = {},
  counterVariable = 0
) => {
  let counter = counterVariable;

  // Ability to create a new task

  const inputTask = (task) => {
    todoTasks[task.id] = task;
  };

  const createNewTask = (title, description, duedate, priority) => {
    const newTask = TodoTask(counter++, title, description, duedate, priority);
    inputTask(newTask);
  };

  const getTodoTasks = () => todoTasks;

  const getTask = (key) => todoTasks[key];

  const getId = () => id;

  const getName = () => name;

  const getDesc = () => description;

  const getCounter = () => counter;

  return {
    getTodoTasks,
    getId,
    getName,
    createNewTask,
    getTask,
    getDesc,
    getCounter,
  };
};

export default createProject;
