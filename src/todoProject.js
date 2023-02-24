import TodoTask from "./todoTask";

const createProject = (id, name, description, todoTasks = {}) => {
    let counter = 0;

    // Ability to create a new task
   

    const inputTask = (task) => {
        todoTasks[task.id] = task
    }

    const createNewTask = (title, description, duedate, priority) => {
        let newTask = TodoTask(counter++, title, description, duedate, priority)
        inputTask(newTask);
    };
    
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

    const getDesc = () => {
        return description
    }

    const getCounter = () => {
        return counter;
    }

    return { getTodoTasks, getId, getName, createNewTask, getTask , getDesc, getCounter };
};

export default createProject;