function showGreeting() {
    document.body.style.backgroundColor = "#2e0927";
    document.getElementById("greeting").style.display = "flex";
    document.getElementById("a").style.display = "flex";
    for (let i = 0; i < 20; i++) createSparkle();

}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = (window.innerHeight / 2 + Math.random() * 100) + "px";
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1500);
}