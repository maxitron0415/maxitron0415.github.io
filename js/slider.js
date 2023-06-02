const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');
const imgArr = ['./img/raster/pad_girl_longhair.png','./img/raster/pad_girl_shorthair.png','./img/raster/pad_man_hat.png'];
let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction){
    currentIndex +=direction;
    if(currentIndex >= imgArr.length){
        currentIndex = 0;
    } else if (currentIndex<0) {
        currentIndex = imgArr.length - 1;
    }
    slide(currentIndex);    
}

function slide(index){
    img.style.display = 'none';
    setTimeout(()=>{
        img.style.display = 'block';
    }, 0);
    img.src = imgArr[index];
    updateDots(index);
    
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('activ');
    }
    dots[index].classList.add('activ');
}
const btnLeft = document.querySelector('.slider__nav-left');
const btnRight = document.querySelector('.slider__nav-right');

 btnLeft.addEventListener('click', ()=>{
    nextIndex(-1)
});
btnRight.addEventListener('click', ()=>{
    nextIndex(1)
});

