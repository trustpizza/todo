export default function (id, title, description, duedate, priority) {
  const todoTask = {
    id,
    title,
    description,
    duedate,
    priority,
    isComplete: false,
  };
  return todoTask;
}
