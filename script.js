function locomotivePart() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
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
        
    }, "a")
    tl.from("#page1 nav", {
        opacity:0,
        ease: Power4,
        duration: 1.25,
        delay:0.2
    }, "a")
}

function cursurAnimation() {
    var limit = document.querySelector("#hero3");
    var image = document.querySelector(".p1-img img");
    limit.addEventListener("mouseenter", function () {
        image.style.opacity = 1;
    });
    limit.addEventListener("mouseleave", function () {
        image.style.opacity = 0;
    });
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            top: dets.y,
            left: dets.x
        })
    });
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".p1-img img", {
            top: dets.y,
            left: dets.x
        })
    });  
}
function magnetEffect() {
    Shery.makeMagnet("#right h4");
Shery.makeMagnet("nav #left i");
}
function page2Effect() { 
    var p2_limit = document.querySelector("#video-container");
    var image = document.querySelector("#image");
    var vid = document.querySelector("#vid");
    var crsr = document.querySelector("#video-crsr");
    var original_crsr = document.querySelector("#crsr");
    var flag = 0;
    p2_limit.addEventListener("mouseenter", function () {
        original_crsr.style.display = "none";
    });
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
    if (flag === 0) {
        image.style.opacity = 0;
    crsr.style.opacity = 0;
        vid.play();
        flag = 1;
    }
    else {
        image.style.opacity = 1;
        crsr.style.opacity = 1;
        gsap.to(crsr, {
            top: "0%",
            left: "80%"
        });
        vid.pause();
        flag = 0;
    }
});
crsr.addEventListener("click", function () {

});
p2_limit.addEventListener("mouseleave", function () {
    image.style.opacity = 1;
    crsr.style.opacity = 1;
    gsap.to(crsr, {
        top: "0%",
        left: "80%"
    });
    original_crsr.style.display = "block";
    vid.pause();
});
}

function page3Animation() {
    Shery.imageEffect("#p3-cont-elem1-img , #p3-cont-elem2-img , #p3-cont-elem5-img , #p3-cont-elem6-img", {
        style: 3,
        config: 
        {"uFrequencyX":{"value":0,"range":[0,100]},"uFrequencyY":{"value":0,"range":[0,100]},"uFrequencyZ":{"value":0,"range":[0,100]},"geoVertex":{"range":[1,64],"value":1},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.6513087410264213},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":5.17,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":0.74,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.58,"range":[0,2],"_gsap":{"id":11}},"discard_threshold":{"value":0.81,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":14.5,"range":[0,100]}}
        ,
        gooey:true,
      });
}

function footerAnimation() {

    var clutter = ""
    var clutter2 = ""
    document.querySelector("#p6-top h1").textContent.split("").forEach(function (elem) {
      clutter += `<span>${elem}</span>`
    })
    document.querySelector("#p6-top h1").innerHTML = clutter
  
  
    document.querySelector("#p6-top").addEventListener("mouseenter", function () {
      gsap.from("#p6-top h1 span", {
        opacity: 0,
        stagger: 0.05
      })
      gsap.to("#footer h2 span", {
        delay: 0.35,
        opacity: 1,
        stagger: 0.1
      })
    })
    document.querySelector("#p6-top").addEventListener("mouseleave", function () {
      gsap.to("#p6-top h1 span", {
        opacity: 1,
        stagger: 0.05,
        delay: 0.15,
      })
    })
  }


locomotivePart();
cursurAnimation();
loaderAnimation();
magnetEffect();
page2Effect();
footerAnimation();
page3Animation();

