const VALOR_PER_DUNGEON = 135;
const VALOR_PER_EPIC_CALLING = 50;
const VALOR_PER_RARE_CALLING = 35;

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

function recalc() {
  const from = document.getElementsByClassName("highlighted-ilvl-from")[0].dataset["level"];
  const to = document.getElementsByClassName("highlighted-ilvl-to")[0].dataset["level"];
  const cost = document.getElementsByClassName("highlighted-valor-cost")[0].children[0].textContent;
  const owned = document.getElementById("owned").value;
  const result = (to - from) * cost - owned;
  document.getElementById("result").textContent = result;
  document.getElementById("dungs").textContent = Math.ceil(result / VALOR_PER_DUNGEON);
  document.getElementById("epic_call").textContent = Math.ceil(result / VALOR_PER_EPIC_CALLING);
  document.getElementById("rare_call").textContent = Math.ceil(result / VALOR_PER_RARE_CALLING);
}