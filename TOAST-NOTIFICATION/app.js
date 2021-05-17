const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const note = document.createElement("div");
  note.classList.add("toast");

  note.innerText = "This challenge is crazy";

  container.appendChild(note);

  setTimeout(() => {
    note.remove();
  }, 1500);
}
