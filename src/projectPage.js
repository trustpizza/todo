const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-10 mx-4 bg-white rounded-md flex flex-col"

    let title = document.createElement('h1')
    title.textContent = project.getName();
    title.className = "text-4xl bold text-center";

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
    taskDisplay.className = "flex items-center justify-center gap-10";

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = "row-span-2 p-2 md:w-10 md:h-10 h-6 w-6"

    let sectionDiv = document.createElement('div');
    sectionDiv.className = "grid grid-rows-2 p-2";

    let title = document.createElement('h2');
    title.textContent = `${task.title}:`;
    title.className = "text-2xl";

    let description = document.createElement('div');
    description.textContent = `${task.description}`;
    description.className = "text-slate-600";
    
    sectionDiv.append(title, description)

    let priority = document.createElement('div');
    priority.textContent = `${task.priority}`;
    priority.className = "row-span-3 p-2"


    taskDisplay.append(checkBox, sectionDiv, priority);
    return taskDisplay;
}

export { ProjectDisplayFactory }