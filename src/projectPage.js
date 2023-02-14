import { TaskFormFactory } from "./taskForm";
import { TaskFormLogic } from "./appendTaskModal";
import PlusSign from "./photos/plus.svg"

const ProjectDisplayFactory = (parent, project) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-10 mx-4 bg-white rounded-md flex flex-col"

    let titleSection = TitleDispay(project);

    const content = document.createElement('div');
    content.id = "tasks-container";
    content.className = "container mx-auto px-2 rounded flex flex-col items-center";

    let newTaskButton = NewTaskButton();

    let tasksDiv = document.createElement('div');
    tasksDiv.className = "container mx-auto px-2 w-full h-full rounded flex flex-col";
    
    
    let form = TaskFormLogic(project, tasksDiv);

    const tasks = project.getTodoTasks();

    content.append(newTaskButton, form)
    container.append(titleSection, content, tasksDiv);
    parent.appendChild(container);
}

// From here below are helper functions!

function displayTasks(tasks, parent) {
    parent.innerHTML = "";
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
        task.isComplete == true ? task.isComplete = false : task.isComplete = true;
        
        console.log(task);
        // I shoudl eventually turn this into a function that checks if the checkbox is checked
    });

    let sectionDiv = document.createElement('div');
    sectionDiv.className = " flex- flex-col p-2";

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
    console.log(taskDisplay)
    return taskDisplay;
}

const TitleDispay = (project) => {
    let titleSection = document.createElement('div');
    titleSection.className = "flex flex-col";

    let title = document.createElement('h1');
    title.textContent = project.getName();
    title.className = "text-4xl font-bold text-center";

    let projDescription = document.createElement('span');
    projDescription.textContent = project.getDesc();
    projDescription.className = "text-slate-600 text-center";

    titleSection.append(title, projDescription);
    return titleSection;
}

const NewTaskButton = () => {
    const newTaskButton = document.createElement('button');
    let buttonImage = new Image();
    buttonImage.src = PlusSign;
    buttonImage.className = "h-10 w-10 p-0 fill-slate-50"

    newTaskButton.append(buttonImage);

    newTaskButton.className = "bg-blue-500 hover:bg-blue-600 text-white font-bold rounded self-center"
    newTaskButton.addEventListener("click", () => {
        if (!buttonImage.classList.contains("rotate-45")) { 
            buttonImage.classList.add("transition", "ease-in-out", "delay-150", "rotate-45")
        } else {
            buttonImage.classList.remove("rotate-45")
        }
    })

    return newTaskButton;
}

export { ProjectDisplayFactory, displayTasks }