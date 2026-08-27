const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

// Intentar reproducir automáticamente al cargar la página
window.addEventListener("load", () => {
    music.play()
        .then(() => {
            musicButton.classList.add("playing");
            musicButton.textContent = "♪";
            musicButton.setAttribute("aria-label", "Pausar música");
        })
        .catch((error) => {
            console.log("El navegador bloqueó la reproducción automática:", error);
        });
});

// Botón de música
musicButton.addEventListener("click", () => {
    if (music.paused) {
        music.play()
            .then(() => {
                musicButton.classList.add("playing");
                musicButton.textContent = "♫";
                musicButton.setAttribute("aria-label", "Pausar música");
            })
            .catch((error) => {
                console.log("No se pudo reproducir la música:", error);
            });
    } else {
        music.pause();
        musicButton.classList.remove("playing");
        musicButton.textContent = "♪";
        musicButton.setAttribute("aria-label", "Reproducir música");
    }
});

//contador
 
const fecha = new Date(2026,9,11,17,0,0).getTime();

setInterval(() => {

    let t = Math.max(0, fecha - Date.now());

    let d = String(Math.floor(t/86400000)).padStart(3,'0');
    let h = String(Math.floor(t/3600000)%24).padStart(2,'0');
    let m = String(Math.floor(t/60000)%60).padStart(2,'0');
    let s = String(Math.floor(t/1000)%60).padStart(2,'0');

    d.split('').forEach((x,i) =>
        document.getElementById('d'+(i+1)).textContent=x
    );

    h.split('').forEach((x,i) =>
        document.getElementById('h'+(i+1)).textContent=x
    );

    m.split('').forEach((x,i) =>
        document.getElementById('m'+(i+1)).textContent=x
    );

    s.split('').forEach((x,i) =>
        document.getElementById('s'+(i+1)).textContent=x
    );

},1000);

//

