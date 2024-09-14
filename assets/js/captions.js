const splashTexts = [
        'made with love by molkify, szvy, ajh, and bach',
        'maybe classwork heaven v4 is in the room with us..?',
        'classwork-heaven.netlify.app',
        'also try kvz online',
        'this message is being written on 9/14/2024 at 10:03 am est',
        'also try szvy central',
        'im watching bfdi while writing this lmao',
        'who the fluff is molkify?',
        ':3',
        'hewo! :3',
        'what',
        'i love piracy :3',
        'also try breakium',
    ];

    function getRandomSplashText() {
        const randomIndex = Math.floor(Math.random() * splashTexts.length);
        return splashTexts[randomIndex];
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('captions').textContent = getRandomSplashText();
    });