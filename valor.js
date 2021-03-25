const VALOR_PER_DUNGEON = 135;
const VALOR_PER_EPIC_CALLING = 50;
const VALOR_PER_RARE_CALLING = 35;

function recalc() {
  const from = document.getElementsByClassName("highlighted-ilvl-from")[0].dataset["level"];
  const to = document.getElementsByClassName("highlighted-ilvl-to")[0].dataset["level"];
  const cost = document.getElementsByClassName("highlighted-valor-cost")[0].children[0].textContent;
  const owned = document.getElementById("owned").value;
  const result = (to - from) * cost - owned;
  document.getElementById("result").textContent = result;
  document.getElementById("dungs").textContent = Math.max(0, Math.ceil(result / VALOR_PER_DUNGEON));
  document.getElementById("epic_call").textContent = Math.max(0, Math.ceil(result / VALOR_PER_EPIC_CALLING));
  document.getElementById("rare_call").textContent = Math.max(0, Math.ceil(result / VALOR_PER_RARE_CALLING));
}