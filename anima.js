function recalc() {
  const from = document.getElementsByClassName("highlighted-ilvl-from")[0].dataset["level"];
  const to = document.getElementsByClassName("highlighted-ilvl-to")[0].dataset["level"];
  //   const num_items = document.getElementById("num_items").value;

  let sum = 0;
  for (let i = from; i < to; i++) {
    sum += i * 50;
  }
  const owned = document.getElementById("owned").value;
  const result = (sum - owned); // * num_items;
  document.getElementById("result").textContent = result;
}