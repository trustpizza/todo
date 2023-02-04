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
    title.placeholder = 'Title';
    title.required = true;
    title.maxLength = 20;
    title.className = 'form-item title';

    

}