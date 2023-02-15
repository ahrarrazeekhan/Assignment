const n = [0, 4, 0, 0, 0, 6, 0, 6, 4, 0];

const container = document.getElementById("container");
const svg = document.getElementById("tank");
const blockWidth = 50;
const blockHeight = 20;
const blockSpacing = 10;
const tankWidth = (blockWidth + blockSpacing) * n.length - blockSpacing;
const tankHeight = 100;

let units = 0;
for (let i = 0; i < n.length; i++) {
    let block = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    let x = i * (blockWidth + blockSpacing);
    let y = tankHeight - n[i] * blockHeight;
    let blockUnits = 0;

    if (i > 0 && i < n.length - 1) {
        let left = n[i - 1];
        let right = n[i + 1];
        let height = Math.min(left, right) - n[i];
        if (height > 0) {
            blockUnits = height * blockWidth;
            units += blockUnits;
        }
    }

    block.setAttribute("x", x);
    block.setAttribute("y", y);
    block.setAttribute("width", blockWidth);
    block.setAttribute("height", n[i] * blockHeight);
    block.setAttribute("class", "block");
    block.setAttribute("data-units", blockUnits);
    svg.appendChild(block);
}

container.style.width = tankWidth + "px";

console.log("Units:", units);