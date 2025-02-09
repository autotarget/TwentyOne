
let startBtn = document.querySelector("#startGame");
let newDealBtn = document.querySelector("#newDeal");
let addCardBtn = document.querySelector("#takeCard");
newDealBtn.setAttribute('disabled', '');
addCardBtn.setAttribute('disabled', '');
let gm = new Manager();
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


