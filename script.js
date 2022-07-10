$(window).on("load", updateView())
setInterval(updateView, 0)
const slides = document.querySelectorAll('.slide')


for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('active')
        slide.innerHTML += "<button type='button'>X</button>"
    }
    )
} 

function updateView(){
	
}

function clearActive() {
    slides.forEach( (slide) => {
        slide.classList.remove('active')
        slide.innerHTML = ""
    })
}

