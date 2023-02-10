export default function(id, title, description, priority) {
    const todoTask = {
        id: id,
        title: title,
        description: description,
        priority: priority,
        isComplete: false
    };
    return todoTask 
};