const ratingCard = document.querySelector("#rating-card");
const submitButton = document.querySelector("button");
const thanksCard = document.querySelector("#thanks-card");

submitButton.addEventListener("click", () => {
    ratingCard.classList.add('hide');
    thanksCard.classList.remove('hide')
})
// ratingCard.classList.add('hide')
// thanksCard.classList.remove('hide')