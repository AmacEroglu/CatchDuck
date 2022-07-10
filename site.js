const başlatBtn = document.getElementById('başla');
const scoreText = document.getElementById('score');
const ördekler = document.querySelectorAll('.ördek')

let öncekiÖrdek;
let süredoldu = false;
let skor = 0;

function rastgeleÖrdek() {
    const sıra = Math.floor(Math.random() * ördekler.length);
    const seçilenÖrdek = ördekler[sıra];
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
    const süre = rastgeleSüre(1000, 1500);
    ördek.classList.add('seçilen');
    setTimeout(() => {
        ördek.classList.remove('seçilen')
        if (!süreDoldu)
            up();
    }, süre);
}

function oyunaBaşla() {
    süreDoldu = false;
    skor = 0;
    up();
    setTimeout(() => {
        süredoldu = true;
    }, 15000);
}

function tıklama(e) {
    if (e.target.classList.contains('seçilen')) {
        skor++
        e.target.classList.remove('seçilen');
    }
     
    scoreText.textContent = skor;

}

başlatBtn.addEventListener('click', () => {
    oyunaBaşla();
})

ördekler.forEach((ördek) => {
    ördek.addEventListener('click', tıklama)
});


