//* las variables del Dom se les antepone $

const d = document,
  $main = d.querySelector("main");

fetch("markdown/prueba.md")
  .then((res) => (res.ok ? res.text() : Promise.reject(res)))
  .then((text) => {
    //console.log(text);
    $main.innerHTML = new showdown.Converter().makeHtml(text);
  })
  .catch((err) => {
    console.log(err);
    let message = err.statusText || "Ocurrió un Error";
    $main.innerHTML = `Error ${err.status}:${message}`;
  });
