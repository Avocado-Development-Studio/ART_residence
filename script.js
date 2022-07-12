$(window).on("load", updateView())
setInterval(updateView, 0)
const slides = document.querySelectorAll('.slide')
const slide1 = document.querySelectorAll('#slide1')
const slidesss = document.querySelectorAll('div.slide.active')
const btns = document.querySelectorAll('.submit')
const btns1 = document.querySelectorAll('#btn1')
const btns2 = document.querySelectorAll('#btn2')
const btns3 = document.querySelectorAll('#btn3')
const heads = document.querySelectorAll('.headr')
const head1 = document.querySelectorAll('#head1')
const head2 = document.querySelectorAll('#head2')
const head3 = document.querySelectorAll('#head3')
var checkButt
var checkButt1
var checkButt2
var checkButt3



for (const slide of slides) {
    slide.addEventListener('click', (event) => {
        clearText(event.target)
        clearActive()
        start()

        slide.classList.add('active')
        const slidess = document.querySelectorAll('.slide')


        btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                buttActive('yes')
            })
        })


        for (const slide of slidess) {
            slide.classList.add('not-active')
        }
        slide.classList.remove('not-active')
    })
}

function start() {

    if (checkButt1 == true) {


        head1.forEach((head) => {
            for (const head of head1) {
                clearActiveHead()
                head.classList.add('active')

                const headd = document.querySelectorAll('.headr')
                for (const head of headd) {
                    head.classList.add('not-active')
                }
                head.classList.remove('not-active')
            }
        })
    }
}



//TODO: Реши проблему с нажатием на первую карточку
//когда несколько раз нажимаешь на него он багуеться чёт
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
        child[index].classList.add('active');
    }

    console.log(h3);
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
    



    // else if (checkButt2 == true) {
    //      head2.forEach( (head) => {
    //          head.classList.add('active')
    //          // head.style.margin = ""
    //          // head.style.transform = ""
    //      })

    // } else if (checkButt2 == false) {
    //      head2.forEach( (head) => {
    //          head.classList.remove('active')
    //          head.classList.add('not-active')
    //          // head.style.margin = "3% 5% 29% 0%"
    //          // head.style.transform = "rotate(90deg)"
    //      })   
    //  } else if (checkButt3 == true) {
    //      head3.forEach( (head) => {
    //          head.style.transform = "rotate(90deg)"
    //          head.style.margin = "67% -51% 12% 0"
    //      }) 
    //  } else if (checkButt == true) {
    //      head.forEach( (head) => {
    //          head.classList.add('not-active')
    //      })
    //  }



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

function buttActive(d) {
    console.log("Робит")
    if (document.querySelectorAll('div.slide.active')) {
        clearActive()
    }
    slidesss.className = "not-active";
}

function clearActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
        slide.classList.remove('not-active')

    })

}

function clearActiveHead() {
    heads.forEach((head) => {

        head.classList.remove('not-active')
    })
}

function updateView() {

}