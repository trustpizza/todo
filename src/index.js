// CSS Files
import './reset.css';
import './styles.css';

import TodoTask from "./todoTask";
import TodoProject from "./todoProject";

// Create a new project
//
// Psuedocode
// we need a counter variable to count how many projects there are
// We need a currentProject variable that is undefined
// We need to create an array of all projects that starts as empty
// Run a check to see if the all-Projets array is empty, if empty, create a new project using the counter
// Set the currentProject to the first entry to allProjects (now the new projects)


// Create modal which has the Todo Task Form
import { generateTaskModal } from './taskModal';
import createProject from './todoProject';
document.body.appendChild(generateTaskModal())
// Modal Submit Listener
document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let title = e.target[0].value;
    let description = e.target[1].value;
    let duedate = e.target[2].value;
    let priority = parseInt(e.target[3].value);

    let newTask = TodoTask(1, title, description, duedate, priority); // ID is made up at the moment!
    console.log(newTask);
});

// Priority Div Logic to add event listeners to each selection
for (const priority of document.getElementsByClassName('priority-div')) {
    priority.addEventListener('click', (e) => {
        let value = e.target.id.slice(-1);
        document.getElementsByClassName('hidden-priority')[0].value = value;
    })
}