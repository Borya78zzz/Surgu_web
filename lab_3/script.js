
const boxes = [
    { width: 80, height: 100 },
    { width: 500, height: 100 },
    { width: 80, height: 100 },
    { width: 80, height: 100 },
    { width: 500, height: 100 },
    { width: 80, height: 100 },
    { width: 80, height: 100 },
    { width: 500, height: 100 },
    { width: 80, height: 100 }
];

const root = document.createElement('div');
document.body.appendChild(root);
for (let i = 0; i < boxes.length; i++) {
    const item = boxes[i];
    const block = document.createElement('div');
    block.style.width = item.width + 'px';
    block.style.height = item.height + 'px';
    block.style.backgroundColor = '#4CAF50';
    block.style.margin = '10px';
    root.appendChild(block);
}

for (let box of boxes) {

}