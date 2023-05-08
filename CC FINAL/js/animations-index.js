gsap.registerPlugin(ScrollTrigger);
var view = gsap.timeline();
ScrollTrigger.saveStyles("");

gsap.from('.message',{
    opacity: 0,
    duration: 1,
    y: -500});
gsap.from('#log-in',{
    opacity: 0,
    duration: 1,
    y: 500});
    