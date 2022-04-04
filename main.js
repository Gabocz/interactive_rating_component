const ratingBtns = document.querySelectorAll('.rating')
const submitBtn = document.querySelector('#submitBtn')
const selectedRatingEl = document.querySelector('#selectedRating')
const ratingCard = document.querySelector('#ratingCard')
const thankYouCard = document.querySelector('#thankYouCard')
ratingBtns.forEach(btn => btn.addEventListener('click', toggleActiveState))

thankYouCard.style.display = 'none'

function toggleActiveState() {
   for(let btn of ratingBtns) {
       btn.classList.remove('active')
   }
   this.classList.add('active')
}

submitBtn.addEventListener('click', () =>{
    for(let btn of ratingBtns) {
        if(btn.classList.contains('active')) {
        const rating = btn.value
        selectedRatingEl.textContent = rating
        thankYouCard.style.display = 'flex'
        ratingCard.style.display = 'none' 
        } 
    }   
})
