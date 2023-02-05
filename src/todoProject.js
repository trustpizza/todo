import TodoTask from "./todoTask";

const createProject = (id, name, todoTasks = {}) => {
    let counter = 0;

    // Ability to create a new task
    const createNewTask = (title, description, duedate, priority) => {
        let newTask = TodoTask(counter++, title, description, duedate, priority)
        // put newTask into todoTasks!
        return newTask
    };
    
    const getTodoTasks = () => {
        return todoTasks;
    };
    
    const getId = () => {
        return id;
    }

    const getName = () => {
        return name;
    }

    return { getTodoTasks, getId, getName, createNewTask };
};

export default createProject;