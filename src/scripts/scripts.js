const modalOverlay = document.querySelector('.modal-overlay');
const cardsImgs = document.querySelectorAll('.card_image-container');


for (let card of cardsImgs) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("video").src = `src/assets/${videoId}`;
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("video").src = "";
})



