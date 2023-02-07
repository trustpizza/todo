function showItem(target, goal) {
    target.addEventListener("click", () => {
        console.log(goal);
    })
}

export { showItem };