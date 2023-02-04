import TodoTask from "./todoTask";
import TodoProject from "./todoProject";

import { generateTaskModal } from './taskModal';

document.body.appendChild(generateTaskModal())

// Modal Submit Listener
document.getElementById('modal-form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Write logic to create a new TodoTask
});