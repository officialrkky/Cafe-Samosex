const aboutUsFaders = document.querySelectorAll(".aboutUsFadeIn");

const aboutUsOptions = {
    thresehold: 1,
    rootMargin: "-200px"
}

const aboutUsAppear = new IntersectionObserver
    (function(enteries, aboutUsAppear){
    enteries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            console.log(entry.target)
            entry.target.classList.add("aboutUsAppear")
        }
    })
}, aboutUsOptions)

aboutUsFaders.forEach(fader => {
    aboutUsAppear.observe(fader)
});
