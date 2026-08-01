fetch("menu.html")
.then(response => response.text())
.then(data => {

    document.getElementById("menu-container").innerHTML = data;

    // menu.html を読み込んでから menu.js を読み込む
    const script = document.createElement("script");
    script.src = "menu.js";
    document.body.appendChild(script);

});