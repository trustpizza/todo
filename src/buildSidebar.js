export default function buildSidebar(parent, ...children) {
    for (const child of children[0]) {
        parent.appendChild(child);
    }
}

