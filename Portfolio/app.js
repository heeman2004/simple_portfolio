//navigation
var tl=gsap.timeline();


tl.from(".nav h1",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.3
})
tl.from(".nav h3",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.3
})
tl.from(".nav h2",{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.3,
    stagger:0.3
})
let darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
})

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('herf')).scrollIntoView({
            behaviour:"smooth"
        });
    })
})

//home
gsap.from(".home h2",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1
})
gsap.from(".home h1",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1
})
gsap.from(".home button",{
    y:-10,
    opacity:0,
    duration:0.5,
    delay:1
})