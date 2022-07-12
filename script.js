$(window).on("load", updateView())
setInterval(updateView, 0)
const slides = document.querySelectorAll('.slide')
const slide1 = document.querySelectorAll('#slide1')
const slidesss = document.querySelectorAll('div.slide.active')
const btns = document.querySelectorAll('.submit')
const btns1 = document.querySelectorAll('#btn1')
const btns2 = document.querySelectorAll('#btn2')
const btns3 = document.querySelectorAll('#btn3')
var checkButt
var checkButt1 
var checkButt2
var checkButt3




for (const slide of slides){
    slide.addEventListener('click', () => {
        clearActive()
        slide.classList.add('active')
        const slidess = document.querySelectorAll('.slide')
        
       
            btns.forEach( (btn) => {
                btn.addEventListener('click', () => {
                    buttActive('yes')
                })
            })
         

        for (const slide of slidess){
            slide.classList.add('not-active')
        }
        slide.classList.remove('not-active')
    })
} 

setInterval(function (){
    checkButt = document.getElementsByClassName("slide")
    checkButt1 = document.getElementById("slide1").classList.contains("active")
    checkButt2 = document.getElementById("slide2").classList.contains("active")
    checkButt3 = document.getElementById("slide3").classList.contains("active")
}, 0)

setInterval(function (){

   if (checkButt1 == true) {
            btns1.forEach( (btn) => {
            btn.style.display  = "block"
        })
            btns2.forEach( (btn) => {
                btn.style.display  = "none"
            })
            btns3.forEach( (btn) => {
                btn.style.display  = "none"
            })

    } else if (checkButt2 == true) {
            btns1.forEach( (btn) => {
                btn.style.display  = "none"
            })

            btns2.forEach( (btn) => {
            btn.style.display  = "block"
        })
            btns3.forEach( (btn) => {
                btn.style.display  = "none"
            })

    } else if (checkButt3 == true) {

            btns1.forEach( (btn) => {
                btn.style.display  = "none"
            })

            btns2.forEach( (btn) => {
                btn.style.display  = "none"
            })

            btns3.forEach( (btn) => {
            btn.style.display  = "block"
        })

    } else if(checkButt){
        btns.forEach( (btn) => {
        btn.style.display  = "none"
        })
    }

}, 0)

function buttActive(d) {
    console.log("Робит")
    if (document.querySelectorAll('div.slide.active')) {
        clearActive()
    }
    slidesss.className = "not-active";
}

function clearActive() {
    slides.forEach( (slide) => {
        slide.classList.remove('active')
        slide.classList.remove('not-active')
        
    })

}



function updateView(){
	
}



