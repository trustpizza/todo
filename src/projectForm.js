import createProject from "./todoProject";

const projectForm = () => {
    // This will need a form for creating a new project
    // Projects have: Id, Title, Description
    const form = document.createElement('form');
    form.className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4";

    const titleSection = formSection("title");

    const descriptionSection = formSection("description");
    
    const submitButton = document.createElement('button');
    submitButton.value = 'Create Project';
    submitButton.className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
    submitButton.id = 'submit';

    form.append(titleSection, descriptionSection, submitButton);
    console.log(form);
};

const formSection =  ( labelName, inputFor = null) => {
    const parentElement = document.createElement('div');
    parentElement.className = "mb-4";

    const label = document.createElement('label');
    label.textContent = labelName

    const input = document.createElement('input');
    // input.for = inputFor;
    parentElement.append(label, input);

    return parentElement
}

export { projectForm }