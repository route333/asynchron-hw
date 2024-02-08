const input = document.getElementById("time");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const remodel = input.value * 1000;
  const showText = setTimeout(remodelText, remodel);
});

function remodelText() {
  if (input.value === "") {
    return;
  } else {
    alert(`ви ввели ${input.value}`);
  }
}
