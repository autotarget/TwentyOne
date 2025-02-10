
let startBtn = document.querySelector("#startGame");
let newDealBtn = document.querySelector("#newDeal");
let addCardBtn = document.querySelector("#takeCard");
let audio = new Audio('./sounds/korotkiy-zvuk-razdachi-kart.mp3');
audio.volume = 0.3;
audio.preload = 'auto';
newDealBtn.setAttribute('disabled', '');
addCardBtn.setAttribute('disabled', '');

let gm = new Manager(audio);
startBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    gm.deckElement.innerHTML = '';
    gm.startGame();
    newDealBtn.removeAttribute('disabled', '')
});
newDealBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (gm.newDeal() < 4) {
        newDealBtn.setAttribute('disabled', '')
    };
});
addCardBtn.addEventListener("click", function (e) {
    gm.takeAdditionalCard();
})


