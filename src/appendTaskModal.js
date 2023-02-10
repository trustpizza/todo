import { TaskFormFactory } from './taskForm';

export function appendTaskForm(parent) {
    parent.appendChild(TaskFormFactory().firstChild);
    // Modal Submit Listener

    let form = document.getElementById("new-task-form");
    console.log(form);
    /*
    document.getElementById('modal-form').addEventListener('submit', (e) => {
        e.preventDefault();

        let title = e.target[0].value;
        let description = e.target[1].value;
        let duedate = e.target[2].value;
        let priority = parseInt(e.target[3].value);

        currentProject.createNewTask(title, description, duedate, priority);
        console.log(currentProject);
        console.log(currentProject.getTodoTasks());
    });

    // Priority Div Logic to add event listeners to each selection
    for (const priority of document.getElementsByClassName('priority-div')) {
        priority.addEventListener('click', (e) => {
            let value = e.target.id.slice(-1);
            document.getElementsByClassName('hidden-priority')[0].value = value;
        })
    };
    */
}