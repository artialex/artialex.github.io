console.log("main :: 1", "kek");

fetch("/public/Hi.md")
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    let el = document.querySelector("#file1");

    el.innerHTML = r;
  });

fetch("/public/Java.md")
  .then((r) => {
    return r.text();
  })
  .then((r) => {
    let el = document.querySelector("#file2");

    el.innerHTML = r;
  });
