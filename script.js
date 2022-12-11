const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragdrop);
}

function dragstart(e) {
  e.target.classList.add('hold');
  setTimeout(() => e.target.classList.add('hide'), 0);
}

function dragend(e) {
  e.target.className = 'item';
}

function dragover(e) {
  e.preventDefault()
}
function dragenter(e) {
  e.target.classList.add("hovered")
}
function dragleave(e) {
  e.target.classList.remove("hovered")
}
function dragdrop(e) {
  e.target.classList.remove("hovered")

  e.target.append(item)
}
