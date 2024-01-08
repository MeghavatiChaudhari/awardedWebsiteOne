const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function movewhitecircle(){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#mincircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;

        // console.log(dets);
    })
}
movewhitecircle();

function firstpageanimation(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
        .to(".boundingelem",{
        y:0,
        ease: Expo.easeInOut,
        duration:2,
        delay:-1,
        stagger: .2
        })
        .from("#naya",{
            y:-10,
            opacity:0,
            duration:1.5,
            delay:-1,
            ease: Expo.easeInOut
        })
}
firstpageanimation();
