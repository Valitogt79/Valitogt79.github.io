//* las variables del Dom se les antepone $

const d = document,
    $post1 = d.querySelector("#post1");
$post2 = d.querySelector("#post2");

fetch("markdown/prueba.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
        //console.log(text);
        $post1.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un Error";
        $post1.innerHTML = `Error ${err.status}:${message}`;
    });

fetch("markdown/prueba2.md")
    .then((res) => (res.ok ? res.text() : Promise.reject(res)))
    .then((text) => {
        //console.log(text);
        $post2.innerHTML = new showdown.Converter().makeHtml(text);
    })
    .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ocurrió un Error";
        $post2.innerHTML = `Error ${err.status}:${message}`;
    });