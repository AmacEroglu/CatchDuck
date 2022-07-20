const başlatBtn = document.getElementById('başla');
const scoreText = document.getElementById('score');
const ordekler = document.querySelectorAll('.ördek')
const sureText = document.querySelector('#süreText');

let öncekiÖrdek;
let süredoldu = false;
let skor = 0;
let süre = 15;

function rastgeleÖrdek() {
    const sıra = Math.floor(Math.random() * ordekler.length);
    const seçilenÖrdek = ordekler[sıra];
    if (öncekiÖrdek === seçilenÖrdek) {
        return rastgeleÖrdek();

    } else {
        öncekiÖrdek = seçilenÖrdek;
    }
    return seçilenÖrdek;
}

function rastgeleSüre(min, max) {
    const süre = Math.round(Math.random() * (max - min)) + min;
    return süre;
}

function up() {
    const ördek = rastgeleÖrdek();
    const ordekSüresi = rastgeleSüre(1000, 1500);
    ördek.classList.add('seçilen');
    setTimeout(() => {
        ördek.classList.remove('seçilen')
        if (süre != 0)
            up();
    }, ordekSüresi);

}


function geriSayim() {
    setInterval(function () {
        if (oyunaBaşla = süre) {
            süre--;
            sureText.textContent = süre;
        } else {
            clearInterval();
            sureText.textContent = "süreniz doldu";
        }
    }, 1000);
}



function oyunaBaşla() {
    geriSayim();
    up();
}


function tıklama(e) {
    if (e.target.classList.contains('seçilen')) {
        skor++
        e.target.classList.remove('seçilen');
    }

    scoreText.textContent = skor;
    sureText.textContent = süre += 3;

}

başlatBtn.addEventListener('click', () => {
    oyunaBaşla();
document.getElementById('başla').disabled = true;

})

ordekler.forEach((ördek) => {
    ördek.addEventListener('click', tıklama)
});


