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

// Priority Div Logic to add event listeners to each selection
for (const priority of document.getElementsByClassName('priority-div')) {
    priority.addEventListener('click', (e) => {
        let value = e.target.id.slice(-1);
        document.getElementsByClassName('hidden-priority')[0].value = value;
    })
}

// Psuedo code
// 
/*
1) Select all priority-divs
2. Take each div and add an event listener
3.  The event listener waits for a click and then changes the value of priority to select that value
*/