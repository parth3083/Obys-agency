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
}, "a");
    tl.from("#hero1 h1 ,#hero2 h1, #hero3 h1,#hero4 h1", {
        y: 150,
        stagger: 0.1,
        duration: 0.2,
        delay:0.2
        
},"a")
}
function cursurAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            top: dets.y,
            left:dets.x
        })
    })  
}
function magnetEffect() {
    Shery.makeMagnet("#right h4");
Shery.makeMagnet("nav #left i");
}
function page2Effect() { 
    var p2_limit = document.querySelector("#video-container");
    var image = document.querySelector("#image");
    var vid = document.querySelector("#vid");
    var crsr=document.querySelector("#video-crsr");
p2_limit.addEventListener("mousemove", function (dets) {
    var y = dets.y;
    var x = dets.x;
    var r = y - 100;
    var t = x - 545;
    gsap.to(crsr, {
        top: r,
        left: t
    })
});
crsr.addEventListener("click", function () {
    image.style.opacity = 0;
    console.log("Parth")
});
crsr.addEventListener("click", function () {
    crsr.style.opacity = 0;
});
p2_limit.addEventListener("mouseleave", function () {
    image.style.opacity = 1;
    crsr.style.opacity = 1;
    crsr.style.top = "0%";
    crsr.style.left = "80%";
});
}


cursurAnimation();
loaderAnimation();
magnetEffect();
page2Effect();