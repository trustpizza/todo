import TodoTask from "./todoTask";
import TodoProject from "./todoProject";

import { generateTaskModal } from './taskModal';
import { values } from "lodash";

document.body.appendChild(generateTaskModal())

// Modal Submit Listener
document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();

    let title = e.target[0].value;
    let description = e.target[1].value;
    let duedate = e.target[2].value;

    let newTask = TodoTask(1, title, description, duedate, 1); // ID and priority are made up at the moment!
    console.log(newTask);
});