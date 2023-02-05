import TodoTask from "./todoTask";

const createProject = (id, name, todoTasks = {}) => {
    let counter = 0;

    // Ability to create a new task
    const createNewTask = (title, description, duedate, priority) => {
        let newTask = TodoTask(counter++, title, description, duedate, priority)
        inputTask(newTask);
        return newTask
    };

    const inputTask = (task) => {
        todoTasks[task.id] = task
    }
    
    const getTodoTasks = () => {
        return todoTasks;
    };

    const getTask = (key) => {
        return todoTasks[key];
    }
    
    const getId = () => {
        return id;
    }

    const getName = () => {
        return name;
    }

    return { getTodoTasks, getId, getName, createNewTask, getTask };
};

export default createProject;