const TaskFormFactory = () => {
    let newTaskForm = document.createElement('div');
    newTaskForm.id = '';
    newTaskForm.className = 'max-w-xs'; // Have newTaskForml hidden by default

    let newContent = document.createElement('div');
    newContent.className = '';

    let newTaskTitle = document.createElement('h3'); 
    newTaskTitle.textContent = 'New Task';

    let form = document.createElement('form');
    form.id = '';
    form.className = '';

    let title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Title';
    title.required = true;
    title.maxLength = 20;
    title.className = '';

    let description = document.createElement('input');
    description.type = 'text';
    description.placeholder = "Description...";
    description.required = false;
    description.maxLength = 240;
    description.className = '';

    let duedateLabel = document.createElement('label');
    duedateLabel.for = 'duedate';
    let duedate = document.createElement('input');
    duedate.type = 'date';
    duedate.name = 'duedate';
    duedate.className = '';

    // Psuedocode for priority
    //
    // I need an element which takes a value of either 1, 2 or 3 
    // Options: dropdown menu, radio buttons(preference)
    let priority = document.createElement('select');
    priority.className = 'hidden-priority'
    for (let i = 0; i < 3; i++) {
        let option = document.createElement('option');
        option.value = i
        priority.options.add(option);
    }

    // Commented out until I tackle CSS and can add event listeners better
    
    priority.style.display = 'none';
    //Now I need to create buttons/spans that correspond to those values?

    let prioritySelections = document.createElement('div');
    prioritySelections.className = '';
    prioritySelections.innerHTML = `
        <label id="priority-label"> Priority: </label>
        <div class="priority-div" id="priority-0"></div>
        <div class="priority-div" id="priority-1"></div>
        <div class="priority-div" id="priority-2"></div>
    `
    
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Add New Task';
    submit.className = '';
    submit.id = 'submit';

    //  Add all items to modal-form
    modalForm.appendChild(title);
    modalForm.appendChild(description);
    modalForm.appendChild(duedateLabel);
    modalForm.appendChild(duedate);
    modalForm.appendChild(priority);
    modalForm.appendChild(prioritySelections);
    modalForm.appendChild(submit);

    // Append form to modal
    modalContent.appendChild(modalForm);
    modal.appendChild(modalContent);

    return modal;
}

export { TaskFormFactory };