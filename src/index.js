import TodoTask from "./todoTask";
import TodoProject from "./todoProject";


let task = TodoTask(1, "Test", "A test task", "today", 3, "this is important!");
//console.log(task);

let counter = 0;

let project = TodoProject(counter++, "First");
console.log(project);