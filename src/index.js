// CSS Files
import './reset.css';
import './styles.css';

import TodoTask from "./todoTask";
import TodoProject from "./todoProject";


import { generateTaskModal } from './taskModal';

document.body.appendChild(generateTaskModal())

// Modal Submit Listener
document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let title = e.target[0].value;
    let description = e.target[1].value;
    let duedate = e.target[2].value;
    let priority = parseInt(e.target[3].value);

    let newTask = TodoTask(1, title, description, duedate, priority); // ID and priority are made up at the moment!
    console.log(newTask);
});