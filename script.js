const petals = document.getElementById("petals");
const lights = document.getElementById("lights");

let wind = 0;
let mouseWind = 0;

setInterval(() => {
    // 風向きを少しずつ変える
    wind = (Math.random() - 0.5) * 2.5;
}, 3000);
document.addEventListener("mousemove", (e) => {

    // 左は -1、右は +1
    const target =
        (e.clientX / window.innerWidth - 0.5) * 2;

    // 急に変わらず、ゆっくり風が変わる
    mouseWind = target * 2;

});

function createPetal() {

    const petal = document.createElement("div");
    petal.className = "petal";

    const petalImages = [
    "images/petal1.png",
    "images/petal2.png"
];

petal.style.backgroundImage =
    `url(${petalImages[Math.floor(Math.random() * petalImages.length)]})`;

    let x = -80;
    let y = Math.random() * window.innerHeight;

    let speedX = 2 + Math.random() * 3;

    let wave = Math.random() * Math.PI * 2;
    let rotate = Math.random() * 360;
    let tilt = -25 + Math.random() * 50;
    let rotateSpeed = 0.5 + Math.random() * 2;

    // 手前・奥
    let depth = 0.8 + Math.random() * 1;

    petal.style.width = 20 * depth + "px";
    petal.style.height = 26 * depth + "px";

    // ロゴの前後をランダム
    petal.style.zIndex = depth > 1 ? 20 : 5;

    petals.appendChild(petal);

    function animate() {

        x += speedX + wind + mouseWind;

        // ふわふわ上下
        y += Math.sin(wave) * 0.8;

        // 少し前へ後ろへ
        depth += Math.sin(wave * 0.2) * 0.002;

        rotate += rotateSpeed;

        wave += 0.02;

        petal.style.left = x + "px";
        petal.style.top = y + "px";

       petal.style.transform = `
    rotate(${rotate + tilt}deg)
    rotateY(${Math.sin(wave * 2) * 35}deg)
    scale(${depth})
`;

        if (x > window.innerWidth + 100) {
            petal.remove();
            return;
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// 最初は少なめ
for (let i = 0; i < 5; i++) {
    setTimeout(createPetal, i * 600);
}

// ランダムに追加
setInterval(() => {

    createPetal();

    // たまに風が吹いて2枚追加
    if (Math.random() > 0.7) {
        setTimeout(createPetal, 150);
        setTimeout(createPetal, 300);
    }

}, 900);
document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        modal.style.display="none";

    }

});
// キャラクターページ遷移
document.querySelectorAll(".character-nav a, .back-top").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const url = this.href;

        if (this.classList.contains("nav-next")) {
            document.body.classList.add("slide-left");
        } else {
            document.body.classList.add("slide-right");
        }

        setTimeout(() => {
            location.href = url;
        }, 450);

    });

});