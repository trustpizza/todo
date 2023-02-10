import { TaskFormFactory } from "./taskForm";
import { appendTaskForm } from "./appendTaskModal";

const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-10 mx-4 bg-white rounded-md flex flex-col"

    let titleSection = document.createElement('div');
    titleSection.className = "flex flex-col";

    let title = document.createElement('h1')
    title.textContent = project.getName();
    title.className = "text-4xl font-bold text-center";

    let projDescription = document.createElement('span');
    projDescription.textContent = project.getDesc();
    projDescription.className = "text-slate-600 text-center";

    titleSection.append(title, projDescription);

    const tasksDiv = document.createElement('div');
    tasksDiv.id = "tasks-container";
    tasksDiv.className = "container mx-auto px-2 w-full h-full rounded flex flex-col";

    const newTaskButton = document.createElement('button');
    newTaskButton.textContent = 'Add Task';
    newTaskButton.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
    newTaskButton.addEventListener("click", () => {
        
    })

    tasksDiv.append(newTaskButton)

    appendTaskForm(tasksDiv, project);
    //appendTaskModal(tasksDiv)
    //const newTask = appendTaskModal(tasksDiv);

    const tasks = project.getTodoTasks();

    displayTasks(tasks, tasksDiv);

    container.appendChild(titleSection);
    container.appendChild(tasksDiv);
    parent.appendChild(container);
}

function displayTasks(tasks, parent) {
    Object.keys(tasks).forEach( (key) => {
        const task = tasks[key];
        parent.appendChild(TaskDisplayFactory(task))
    })
}

const TaskDisplayFactory = (task) => {
    let taskDisplay = document.createElement('div');
    taskDisplay.className = "flex items-center justify-center gap-10";

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = "row-span-2 p-2 md:w-10 md:h-10 h-6 w-6"
    if (task.isComplete) { checkBox.checked = true; }

    checkBox.addEventListener('click', () => {
        if (task.isComplete == false) {
            task.isComplete = true;
        } else {
            task.isComplete = false;
        } // I shoudl eventually turn this into a function that checks if the checkbox is checked
    });

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

export { ProjectDisplayFactory, displayTasks }