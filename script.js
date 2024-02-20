// Loader animation 
function loaderAnimation() {
    var tl = gsap.timeline();
tl.from(".line h1, .line h2", {
    y: 150,
    stagger: 0.2,
    duration: 0.3,
    delay: 0.1,
    onStart: function () {
        var h5text = document.querySelector('.a');
var grow = 0;
setInterval(function () { 
    if (grow < 100) {
        h5text.innerHTML = grow++;
    }
    else {
        h5text.innerHTML = grow;
    }
},10)
    },
    ease: Power2
});
tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay:0.85
});
tl.from("#page1", {
    y: 1600,
    opacity: 0,
    ease: Power4,
    duration: 0.2
},"a");
tl.to("#loader", {
    display: "none"
},"a");
}
loaderAnimation();