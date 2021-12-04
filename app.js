const addNote = document.querySelector(".add");
const container = document.querySelector(".container");

function makeNote() {
  const newNote = document.createElement("div");
  newNote.classList.add("notes");
  newNote.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fa fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fa fa-trash"></i>
        </button>
    </div>
    <textarea class="text"></textarea>
    <div class="main hidden"></div>`;
  container.appendChild(newNote);

  const edit = newNote.querySelector(".edit");
  const main = newNote.querySelector(".main");
  const textArea = newNote.querySelector(".text");
  // textArea.value = text;
  const delBtn = newNote.querySelector(".delete");

  edit.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });
  delBtn.addEventListener("click", () => {
    newNote.remove();
  });
}
addNote.addEventListener("click", makeNote);
localStorage;
