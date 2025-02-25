const container = document.querySelector("#container");
const but = document.querySelector("#but");

but.addEventListener('click', () => {
    let n;
    while (isNaN(n) || n < 1 || n > 100) {
        n = Number(prompt("Enter a valid number between 1 and 100:"));
    }

// Remove existing grid
container.innerHTML = '';

// Calculate square size
let squareSize = 960 / n + "px";

// Generate new grid
for (let i = 0; i < n * n; i++) {
    let content = document.createElement("div");
    content.classList.add("content");
    content.style.width = squareSize;
    content.style.height = squareSize;
    container.appendChild(content);
}});


container.addEventListener('mouseover', e => {
    let target = e.target

if (target !== container) {
    target.classList.add('permahover')
}
});