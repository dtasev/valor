function highlight_valor(elem) {
  highlight(elem, "highlighted-valor-cost")
}

function highlight_ilvl_from(elem) {
  highlight(elem, "highlighted-ilvl-from")
}

function highlight_ilvl_to(elem) {
  highlight(elem, "highlighted-ilvl-to")
}

function highlight(elem, klass) {
  for (let e of document.getElementsByClassName(klass)) {
    e.classList.remove(klass);
  }
  elem.classList.add(klass);
  recalc();
}