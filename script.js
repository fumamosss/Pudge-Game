var card = document.getElementById('card');
var btn = document.getElementById('btn');
var pickbtn = document.getElementById('pickbtn');
var lock = document.getElementById('lock');

card.style.display = 'none';
const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function Spawn() {
    pickbtn.disabled = false;
    pickbtn.style.backgroundImage = 'linear-gradient(to bottom, #3B4A61, #2C3344)';
    pickbtn.style.color = '#ffffff';
    lock.style.color = '#c9c8c8';

    btn.style.display = 'none';
    card.style.display = 'block';

    card.style.top = clamp(Math.floor(Math.random() * window.innerHeight), 0, window.innerHeight - 300) + 'px';
    card.style.left = clamp(Math.floor(Math.random() * window.innerWidth), 0, window.innerWidth - 350) + 'px';
    setTimeout(() => {
        pickbtn.disabled = true;
        pickbtn.style.backgroundImage = 'linear-gradient(to bottom, #292C2C, #1E1F23)';
        pickbtn.style.color = '#808283';
        lock.style.color = '#616161';

        btn.style.display = 'block';
    }, 400);
}

pickbtn.onclick = function() {
        pickbtn.disabled = true;
        pickbtn.style.backgroundImage = 'linear-gradient(to bottom, #292C2C, #1E1F23)';
        pickbtn.style.color = '#808283';
        lock.style.color = '#616161';

        btn.style.display = 'block';
        const winText = document.createElement("h1");
        winText.id = 'winText';
        winText.innerText = 'ПОБЕДА!';
        document.body.insertBefore(winText, btn);
}

btn.onclick = function() {
    Spawn();
    document.getElementById('winText').remove();
}