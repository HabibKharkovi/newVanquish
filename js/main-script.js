
var countdown = function(value) {
    if (value >= 0) {
        console.log(value);
        document.getElementsByClassName('timer')[0].innerHTML = value
        return setTimeout(() => countdown(value - 1), 1000)
    } else {
        firstScreen()
    }
};

countdown(5);

function firstScreen(){
    const tl = gsap.timeline();
    tl.to('.first-step', {display: 'none', duration: 0});
    tl.from('.main-title-1', {display: 'block', duration: 2}, "+=1")
    tl.to('.main-title-1', {display: 'none'})
    tl.to('.main-title-2', {display: 'block', duration: 2}, "-=0.5")
    tl.to('.main-title-2', {opacity: 0, duration: 1})
    tl.to('.third-step', {opacity: 1, duration: 1.5})
    tl.to('.third-step', {opacity: 0, duration: 1})
}




