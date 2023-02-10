import { TaskFormFactory } from './taskForm';

const appendTaskForm = (parent, currentProject) => {
    let taskForm = TaskFormFactory();
    parent.appendChild(taskForm);
    // Modal Submit Listener

    let form = taskForm.firstChild.firstChild
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let title = e.target[0].value;
        let description = e.target[1].value;
        //let duedate = e.target[2].value;
        let priority = parseInt(e.target[2].value);

        currentProject.createNewTask(title, description, priority);
        // Add a show-updated-form
    });

    // Priority Div Logic to add event listeners to each selection
    for (const priority of document.getElementsByClassName('priority-div')) {
        priority.addEventListener('click', (e) => {
            let value = e.target.id.slice(-1);
            document.getElementsByClassName('hidden-priority')[0].value = value;
        })
    };
}

export { appendTaskForm }