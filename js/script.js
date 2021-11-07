//* las variables del Dom se les antepone $

const d = document,
    $section = d.querySelector("section");

fetch("markdown/prueba.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
        //console.log(text);
        $section.innerHTML = new showdown.Converter().makeHtml(text);
    })
fetch("markdown/prueba2.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
        //console.log(text);
        $section.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un Error";
        $section.innerHTML = `Error ${err.status}:${message}`;
    });