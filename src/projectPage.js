const ProjectDisplayFactory = (parent) => {
    const container = document.createElement("div");
    container.className = "container mx-auto my-4 mx-4 bg-slate-50 rounded-md"
    parent.appendChild(container)
}

export { ProjectDisplayFactory }