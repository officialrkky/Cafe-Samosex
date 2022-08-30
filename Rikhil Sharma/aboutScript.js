const aboutContent = document.querySelector('.aboutContent');
const aboutMeOptions = {};

const aboutMeExpand = new IntersectionObserver(
    function(enteries, aboutMeExpand){
        enteries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
                console.log('not work')
            }
            else{
                console.log('works')
                entry.target.classList.add('aboutMeExpand')
            }
        })
    }, aboutMeOptions
)

aboutMeExpand.observe(aboutContent)

