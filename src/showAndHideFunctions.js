function showOrHideItem(start, target) {
    if (target.classList.contains('-translate-x-full')) {
        start.addEventListener("click", () => {
            target.classList.remove('-translate-x-full')
            console.log('yes')
        });
    } else {
        
    }
    
}

export { showOrHideItem };