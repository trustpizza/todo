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

    let duedateLabel = document.createElement('label');
    duedateLabel.for = 'duedate';
    let duedate = document.createElement('input');
    duedate.type = 'date';
    duedate.name = 'duedate';
    duedate.className = 'form-item duedate';

    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'DONE';
    submit.className = 'form-item submit';
    submit.id = 'submit';

    //  Add all items to modal-form
    modalForm.appendChild(title);
    modalForm.appendChild(description);
    modalForm.appendChild(duedateLabel);
    modalForm.appendChild(duedate);
    modalForm.appendChild(submit);

    // Append form to modal
    modalContent.appendChild(modalForm);
    modal.appendChild(modalContent);

    return modal;
}