const bonkAudio1 = new Audio(chrome.runtime.getURL("./assets/bongo-1.mp3"));
const bonkAudio2 = new Audio(chrome.runtime.getURL("./assets/bongo-2.mp3"));
const bonkAudioFull = new Audio(chrome.runtime.getURL("./assets/bongo-full.mp3"));

document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('bink').addEventListener('click', () => {
        document.getElementById('cat').style.backgroundImage = 'url("../assets/bongo-cat-bink.webp")';
        bonkAudio1.play();
        bonkAudioFull.pause();
        bonkAudioFull.currentTime = 0;
    })

    document.getElementById('bonk').addEventListener('click', () => {
        document.getElementById('cat').style.backgroundImage = 'url("../assets/bongo-cat-bonk.webp")';
        bonkAudio2.play();
        bonkAudioFull.pause();
        bonkAudioFull.currentTime = 0;
    })

    oncontextmenu = (event) => {
        event.preventDefault();

        if (bonkAudioFull.paused) {
            document.getElementById("cat").classList.add('playBongo');
            bonkAudioFull.play();
        }
    };

});

bonkAudioFull.addEventListener('pause', () => {
    document.getElementById("cat").classList.remove('playBongo');
});

bonkAudioFull.addEventListener('ended', () => {
    document.getElementById("cat").classList.remove('playBongo');
});
