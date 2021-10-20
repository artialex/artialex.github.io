console.log("main :: 1", "kek");

fetch("/public/Hi.md")
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    console.log("main :: 3", r);
    let el = document.querySelector("#file");

    el.innerHTML = r;
  });
