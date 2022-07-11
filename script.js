$(window).on("load", updateView())
setInterval(updateView, 0)
const slides = document.querySelectorAll('.slide')

for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('active')
        slide.innerHTML += "<button type='submit' id='submit'>X</button>"
        const slidess = document.querySelectorAll('.slide')
        for (const slide of slides){
            slide.classList.add('not-active')
        }
        slide.classList.remove('not-active')
    }
    )
} 

function clearActive() {
    slides.forEach( (slide) => {
        slide.classList.remove('active')
        slide.classList.remove('not-active')
        slide.innerHTML = ""
    })
}


function updateView(){
	
}



