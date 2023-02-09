import _ from "lodash";

const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-4 mx-4 bg-slate-50 rounded-md p-4 flex flex-col"

    let title = document.createElement('h1')
    title.textContent = project.getName();
    title.className = "text-2xl bold text-center";

    const tasksDiv = document.createElement('div');
    tasksDiv.className = "container mx-auto px-2 w-full h-full rounded flex flex-col";

    const tasks = project.getTodoTasks();

    Object.keys(tasks).forEach( (key) => {
        // This iterates over the tasks hash
        const task = tasks[key];
        
        tasksDiv.appendChild(TaskDisplayFactory(task))
        // Build a display for each task
    })

    container.appendChild(title);
    container.appendChild(tasksDiv);
    parent.appendChild(container);
}

const TaskDisplayFactory = (task) => {
    let taskDisplay = document.createElement('div');
    taskDisplay.className = "grid grid-cols-3 grid-rows-2";

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = "row-span-2"


    let title = document.createElement('h2');
    title.textContent = `${task.title}:`;
    title.className = "-start-1";

    let description = document.createElement('div');
    description.textContent = `${task.description}`;
    description.className = "row-start-2 col-start-2";    

    let priority = document.createElement('div');
    priority.textContent = `${task.priority}`;
    priority.className = "row-span-3"


    taskDisplay.append(checkBox, title, description, priority);
    return taskDisplay;
}

export { ProjectDisplayFactory }