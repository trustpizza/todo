export function generateTaskModal() {
    let modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'hidden'; // Have modal hidden by default

    let modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    let newTaskTitle = document.createElement('h3'); 
    newTaskTitle.textContent = 'New Task';

    let modalForm = document.createElement('form');
    modalForm.id = 'modal-form';

    let title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Title';
    title.required = true;
    title.maxLength = 20;
    title.className = 'form-item title';

    let description = document.createElement('input');
    description.type = 'text';
    description.placeholder = "Description...";
    description.required = false;
    description.maxLength = 240;
    description.className = 'form-item description';

    let dueDateLabel = document.createElement('label');
    dueDateLabel.for = 'due-date';
    let dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.className = 'form-item due-date';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'DONE';
    submit.className = 'form-item submit';
    submit.id = 'submit';

    //  Add all items to modal-form
    modalForm.appendChild(title);
    modalForm.appendChild(description);
    modalForm.appendChild(dueDateLabel);
    modalForm.appendChild(dueDate);
    modalForm.appendChild(submit);

    // Append form to modal
    modalContent.appendChild(modalForm);
    modal.appendChild(modalContent);

    return modal;
}