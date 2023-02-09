const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-4 mx-4 bg-slate-50 rounded-md p-4"

    let title = document.createElement('h1')
    title.textContent = project.getName();
    title.className = "text-2xl bold text-center";

    const tasks = project.getTodoTasks();

    Object.keys(tasks).forEach( (key) => {
        // This iterates over the tasks hash
        const task = tasks[key];
        // Build a display for each task
    })

    container.appendChild(title);
    parent.appendChild(container)
}

const TaskDisplayFactory = (task) => {
    
}

export { ProjectDisplayFactory }