export default function(id, title, description, dueDate, priority) {
    const todoTask = {
        id: id,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        isComplete: false
    };
    return { todoTask }
};