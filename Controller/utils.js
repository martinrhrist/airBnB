//Util Functions
function getById(id) {
  return document.getElementById(id);
}

function createEl(el, text) {
  let newEl = document.createElement(el);
  if (text) {
    newEl.innerText = text;
  }
  return newEl;
}
