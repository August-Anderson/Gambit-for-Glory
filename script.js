function hideAll() {
    document.getElementById("titlepage").style.display = "none";
    document.getElementById("game1").style.display = "none";
    document.getElementById("game2").style.display = "none";
    document.getElementById("game3").style.display = "none";
    document.getElementById("game4").style.display = "none";
    document.getElementById("game5").style.display = "none";
    document.getElementById("winscreen").style.display = "none";
    document.getElementById("winscreen2").style.display = "none";
    document.getElementById("winscreen3").style.display = "none";
    document.getElementById("winscreen4").style.display = "none";
    document.getElementById("winscreen5").style.display = "none";
    document.getElementById("losescreen").style.display = "none";
}

function goToGame() {
    hideAll();
    document.getElementById("game1").style.display = "flex";
}

function returnHome() {
    hideAll();
    document.getElementById("titlepage").style.display = "flex";
    document.body.style.backgroundColor = "darkslategray";
}

function battle1() {
    let result = Math.random();
    hideAll();
    if (result > 0) { // TESTING - change back to 0.5 before release
        document.getElementById("winscreen").style.display = "flex";
        document.body.style.backgroundColor = "forestgreen";
    } else {
        document.getElementById("losescreen").style.display = "flex";
        document.body.style.backgroundColor = "crimson";
    }
}

function battle2() {
    let result = Math.random();
    hideAll();
    if (result > 0) { // TESTING - change back to 0.5 before release
        document.getElementById("winscreen2").style.display = "flex";
        document.body.style.backgroundColor = "forestgreen";
    } else {
        document.getElementById("losescreen").style.display = "flex";
        document.body.style.backgroundColor = "crimson";
    }
}

function battle3() {
    let result = Math.random();
    hideAll();
    if (result > 0) { // TESTING - change back to 0.5 before release
        document.getElementById("winscreen3").style.display = "flex";
        document.body.style.backgroundColor = "forestgreen";
    } else {
        document.getElementById("losescreen").style.display = "flex";
        document.body.style.backgroundColor = "crimson";
    }
}

function battle4() {
    let result = Math.random();
    hideAll();
    if (result > 0) { // TESTING - change back to 0.5 before release
        document.getElementById("winscreen4").style.display = "flex";
        document.body.style.backgroundColor = "forestgreen";
    } else {
        document.getElementById("losescreen").style.display = "flex";
        document.body.style.backgroundColor = "crimson";
    }
}

function battle5() {
    let result = Math.random();
    hideAll();
    if (result > 0) { // TESTING - change back to 0.5 before release
        document.getElementById("winscreen5").style.display = "flex";
        document.body.style.backgroundColor = "gold";
        launchConfetti();
    } else {
        document.getElementById("losescreen").style.display = "flex";
        document.body.style.backgroundColor = "crimson";
    }
}

function battleOn() {
    hideAll();
    document.getElementById("game2").style.display = "flex";
    document.body.style.backgroundColor = "darkslategray";
}

function battleOn2() {
    hideAll();
    document.getElementById("game3").style.display = "flex";
    document.body.style.backgroundColor = "darkslategray";
}

function battleOn3() {
    hideAll();
    document.getElementById("game4").style.display = "flex";
    document.body.style.backgroundColor = "darkslategray";
}

function battleOn4() {
    hideAll();
    document.getElementById("game5").style.display = "flex";
    document.body.style.backgroundColor = "darkslategray";
}

function launchConfetti() {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        size: Math.random() * 10 + 5,
        color: `hsl(${Math.random() * 360}, 90%, 60%)`,
        speed: Math.random() * 4 + 2,
        angle: Math.random() * 360,
        spin: Math.random() * 6 - 3
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle * Math.PI / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();
            p.y += p.speed;
            p.angle += p.spin;
        });
        if (pieces.some(p => p.y < canvas.height)) {
            requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    draw();
}
