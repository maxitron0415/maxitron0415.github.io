document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

const accordion = () => {
    const btns = document.querySelectorAll(".accordion-head");
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            this.classList.toggle("active-style");
            //Следующий элемент
            this.nextElementSibling.classList.toggle("active-content");
            if (this.classList.contains("active-style")) {
                this.nextElementSibling.style.maxHeight =
                    this.nextElementSibling.scrollHeight + 50 + "px";
            } else {
                this.nextElementSibling.style.maxHeight = "0px";
            }
        });
    });


};
accordion();

const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal__btn");
const closeBtn = document.querySelector(".modal__close");


const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookies__btn");

cookiesBtn.addEventListener("click", function () {
    cookies.style.display = "none";
});



const list = document.querySelector('.list'),
        items = document.querySelectorAll('.section-guides__pad')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id

        console.log(targetId);

        switch(targetId) {
            case 'all':
                getItems('section-guides__pad')
                break
            case 'french':
                getItems(targetId)
                break
            case 'german':
                getItems(targetId)
                break
            
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}