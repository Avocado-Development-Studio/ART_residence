$(window).on("load", updateView())
setInterval(updateView, 0)
const slides = document.querySelectorAll('.slide')
const slide1 = document.querySelectorAll('#slide1')
const slide2 = document.querySelectorAll('#slide2')
const slidesss = document.querySelectorAll('.not-active')
const btns = document.querySelectorAll('.submit')
const btns1 = document.querySelectorAll('#btn1')
const btns2 = document.querySelectorAll('#btn2')
const btns3 = document.querySelectorAll('#btn3')
const heads = document.querySelectorAll('.headr')
const head1 = document.querySelectorAll('#head1')
const head2 = document.querySelectorAll('#head2')
const head3 = document.querySelectorAll('#head3')
const peop1 = document.querySelectorAll("#peop1")
var checkButt
var checkButt1
var checkButt2
var checkButt3



for (const slide of slides) {
    slide.addEventListener('click', (event) => {
        clearText(event.target)
        clearActive()



        slide.classList.add('active')
        const slidess = document.querySelectorAll('.slide')


        btns.forEach( (btn) => {
            btn.addEventListener('click', () => {
                clearActive()
                //  slides.forEach( (slide) => {
                //     slide.classList.remove('hide')
                //     slide.classList.add('not-hide')
                // })


                if (document.querySelectorAll('div.slide.active')) {
                    heads.forEach( (head) => {
                        head.classList.remove('active')
                        head.classList.remove('not-active')
                    })
                }
            })
        })


        for (const slide of slidess) {
            slide.classList.add('not-active')
            // slide.classList.remove('not-hide')
            // slide.classList.add('hide')
        }
        // slide.classList.remove('hide')
        slide.classList.remove('not-active')
    })
}

setInterval(function() {
    checkButt = document.getElementsByClassName("slide")
    checkButt1 = document.getElementById("slide1").classList.contains("active")
    checkButt2 = document.getElementById("slide2").classList.contains("active")
    checkButt3 = document.getElementById("slide3").classList.contains("active")
    checkHead = document.getElementById("slide active")
    checkHead1 = document.getElementById("head1").classList.contains("active")
    checkHead2 = document.getElementById("head2").classList.contains("active")
    checkHead3 = document.getElementById("head3").classList.contains("active")
}, 0)

setInterval(function() {
    clearText = (event) => {
    h3 = document.querySelectorAll('h3');

    child = event.children;

    
//убирает теги актива , и делает все h3 неактивными
    for (let index = 0; index < h3.length; index++) {
        h3[index].classList.remove('active');
        h3[index].classList.add('not-active');
    }

//добавляет всем элементам внутри активной карточки тег "active"
    for (let index = 0; index < child.length; index++) {
        child[index].classList.remove('not-active');
        // child[index].classList.add('active');
    }
}  

    if (checkButt2 == true) {
        peop1.forEach( (peop) => {
            peop.style.display = "block"
        })
    } else {
        peop1.forEach( (peop) => {
            peop.style.display = "none"
        })
    }

    if (checkButt1 == true) {
        head1.forEach((head) => {
            head.style.marginLeft = "39%"
            
        })
        head2.forEach((head) => {
            head.style.marginLeft = "0%"
        })
        head3.forEach((head) => {
            head.style.marginLeft = "0%"
        })
    } else if (checkButt2 == true) {
        head1.forEach((head) => {
            head.style.marginLeft = "0%"
        })

        head2.forEach((head) => {
            head.style.marginLeft = "44%"
        })

        head3.forEach((head) => {
            head.style.marginLeft = "0%"
        })
    } else if (checkButt3 == true) {
        head1.forEach((head) => {
            head.style.marginLeft = "0%"
        })

        head2.forEach((head) => {
            head.style.marginLeft = "0%"
        })

        head3.forEach((head) => {
            head.style.marginLeft = "41%"
        })
    } else if (checkButt) {
        heads.forEach((head) => {
            head.style.marginLeft = "0%"
        })
    }

    if (checkButt1 == true) {
        btns1.forEach((btn) => {
            btn.style.display = "block"
        })
        btns2.forEach((btn) => {
            btn.style.display = "none"
        })
        btns3.forEach((btn) => {
            btn.style.display = "none"
        })

    } else if (checkButt2 == true) {
        btns1.forEach((btn) => {
            btn.style.display = "none"
        })

        btns2.forEach((btn) => {
            btn.style.display = "block"
        })
        btns3.forEach((btn) => {
            btn.style.display = "none"
        })

    } else if (checkButt3 == true) {

        btns1.forEach((btn) => {
            btn.style.display = "none"
        })

        btns2.forEach((btn) => {
            btn.style.display = "none"
        })

        btns3.forEach((btn) => {
            btn.style.display = "block"
        })

    } else if (checkButt) {
        btns.forEach((btn) => {
            btn.style.display = "none"
        })
    }

}, 0)

function clearActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active')   
})

}

function updateView() {

}