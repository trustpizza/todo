export default function (id, title, description, priority) {
  const todoTask = {
    id,
    title,
    description,
    priority,
    isComplete: false,
  };
  return todoTask;
}
