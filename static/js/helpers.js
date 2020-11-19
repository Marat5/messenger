export function isEqual(lhs, rhs) {
    return lhs === rhs;
}
export function render(query, block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());
    return root;
}
