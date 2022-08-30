const servicesEffect = document.querySelectorAll('.servicesEffect');

const serviceOptions = {};

const servicesEffectActive = new IntersectionObserver(
    function(enteries, servicesEffectActive){
        enteries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('servicesEffectActive')
            }
        })
    }, serviceOptions
)

servicesEffect.forEach(fader => {
    servicesEffectActive.observe(fader)
})



