export default function(id, title, description, duedate, priority) {
    const todoTask = {
        id: id,
        title: title,
        description: description,
        duedate: duedate,
        priority: priority,
        isComplete: false
    };
    return todoTask 
};