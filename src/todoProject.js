const createProject = (id, name, todoTasks = {}) => {
    let counter = 0;

    const getTodoTasks = () => {
        return todoTasks;
    };
    
    const getId = () => {
        return id;
    }

    const getName = () => {
        return name;
    }


    return { getTodoTasks, getId, getName }
};

export default createProject;