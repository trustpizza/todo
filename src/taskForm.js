const TaskFormFactory = () => {
    let newTaskForm = document.createElement('div');
    newTaskForm.id = 'newTaskForm';
    newTaskForm.className = '-translate-y-96 h-0 opacity-0 transition duration-250 ease-in-out max-w-xs md:max-w-lg'; // Have newTaskForml hidden by default

    let newContent = document.createElement('div');
    newContent.className = 'flex items-center justify-center';

    let newTaskTitle = document.createElement('h3'); 
    newTaskTitle.textContent = 'New Task';


    let form = document.createElement('form');
    form.id = 'new-task-form';
    form.className = 'w-full max-w-sm flex flex-col gap-2';

    let innerFormDiv = document.createElement('div')
    innerFormDiv.className = 'flex items-center border-b border-teal-500 py-2';


    let title = document.createElement('input');
    title.type = 'text';
    title.placeholder = 'Title';
    title.required = true;
    title.maxLength = 20;
    title.className = 'appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight';

    let description = document.createElement('input');
    description.type = 'text';
    description.placeholder = "Description...";
    description.required = false;
    description.maxLength = 240;
    description.className = 'flex-grow appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight';

    /*
    let duedateLabel = document.createElement('label');
    duedateLabel.for = 'duedate';
    let duedate = document.createElement('input');
    duedate.type = 'date';
    duedate.name = 'duedate';
    duedate.className = '';

    */

    // Psuedocode for priority
    //
    // I need an element which takes a value of either 1, 2 or 3 
    // Options: dropdown menu, radio buttons(preference)
    let priority = document.createElement('select');
    priority.className = 'block appearance-none bg-white border border-gray-400 hover:border-gray-500 rounded px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline';
    let defaultOption = document.createElement('option');
    defaultOption.disabled = true;
    defaultOption.textContent = "Priority";
    priority.options.add(defaultOption)
    for (let i = 0; i < 3; i++) {
        let option = document.createElement('option');
        option.value = i + 1;
        option.textContent = i + 1;
        priority.options.add(option);
    }

    // Commented out until I tackle CSS and can add event listeners better
    
    //Now I need to create buttons/spans that correspond to those values?
    
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Add Task';
    submit.className = 'flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 text-sm border-4 text-white py-1 px-2 rounded';
    submit.id = 'submit';

    //  Add all items to modal-form
    innerFormDiv.append(title, description, priority)

    form.append(innerFormDiv, submit);


    // Append form to modal
    newContent.appendChild(form);
    //newContent.appendChild(submit);
    newTaskForm.appendChild(newContent);

    return newTaskForm;
}

export { TaskFormFactory };