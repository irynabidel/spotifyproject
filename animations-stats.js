gsap.registerPlugin(ScrollTrigger);
var view = gsap.timeline();
ScrollTrigger.saveStyles(".content1, .content2, .content3, .content4, .content5 , .content6");

gsap.from('.navbar',{
    opacity: 0,
    duration: 1,
    y: -3100});
gsap.from('.first',{
    opacity: 0,
    duration: 1,
    x: -3100});
gsap.from('.greeting-name',{
    opacity: 0,
    duration: 1,
    x: 3100});
gsap.from('.comma',{
    opacity: 0,
    duration: 1,
    x: 3100});
gsap.from('.scroll-down-message',{
    opacity: 0,
    duration: 1,
    y: 3100});
ScrollTrigger.matchMedia({
        "(min-width: 1050px)" : function()
        {
            gsap.from(".content1" , {
                scrollTrigger: {
                trigger: '.content1',
                start: "top 90%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content2" , {
                scrollTrigger: {
                trigger: '.content2',
                start: "top 70%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content3" , {
                scrollTrigger: {
                trigger: '.content3',
                start: "top 50%",
            
                },
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            
            gsap.from(".content4" , {
                scrollTrigger: {
                trigger: '.content4',
                start: "top 50%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content5" , {
                scrollTrigger: {
                trigger: '.content5',
                start: "top 50%",
                },
                x: -50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content6" , {
                scrollTrigger: {
                trigger: '.content6',
                start: "top 70%",
                },
                x: 50,
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
        },
        "(max-width: 1049px)" : function()
        {
            gsap.from(".content1" , {
                scrollTrigger: {
                trigger: '.content1',
                start: "top 50%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content2" , {
                scrollTrigger: {
                trigger: '.content2',
                start: "top 70%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content3" , {
                scrollTrigger: {
                trigger: '.content3',
                start: "top 50%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            
            gsap.from(".content4" , {
                scrollTrigger: {
                trigger: '.content4',
                start: "top 50%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content5" , {
                scrollTrigger: {
                trigger: '.content5',
                start: "top 50%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
            gsap.from(".content6" , {
                scrollTrigger: {
                trigger: '.content6',
                start: "top 70%",
                },
                opacity: 0,
                duration: 1,
                stagger: .5,
                })
        }
})