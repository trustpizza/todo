import _ from "lodash";

const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-4 mx-4 bg-slate-50 rounded-md p-4"

    let title = document.createElement('h1')
    title.textContent = project.getName();
    title.className = "text-2xl bold text-center";

    const tasksDiv = document.createElement('div');
    tasksDiv.className = "";

    const tasks = project.getTodoTasks();
    console.log(tasks)

    Object.keys(tasks).forEach( (key) => {
        // This iterates over the tasks hash
        const task = tasks[key];
        let div = document.createElement('div');
        div.appendChild(TaskDisplayFactory(task));
        console.log(TaskDisplayFactory(task))

        tasksDiv.appendChild(div);
        // Build a display for each task
    })

    container.appendChild(title);
    container.appendChild(tasksDiv);
    parent.appendChild(container);
}

const TaskDisplayFactory = (task) => {
    let taskDisplay = document.createElement('div');

    let title = document.createElement('h2');

    let description = document.createElement('div');

    let dueDate = document.createElement('div');

    let priority = document.createElement('div');

    let checkBox = document.createElement('div');

    taskDisplay.append(title, description, dueDate, priority, checkBox);
    return taskDisplay;
}

export { ProjectDisplayFactory }