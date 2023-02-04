export default function(id, title, description, dueDate, priority, notes) {
    const todoTask = {
        id: id,
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        isComplete: false
    };

    return { todoTask }
};