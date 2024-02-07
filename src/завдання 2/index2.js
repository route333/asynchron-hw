const boxes = document.querySelectorAll(".box");

const interval = setInterval(changeColor, 500);

function changeColor() {
    boxes.forEach(box => {
        const red = Math.random() * (255 - 1) + 1;
        const green = Math.random() * (255 - 1) + 1;
        const blue = Math.random() * (255 - 1) + 1;
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
}