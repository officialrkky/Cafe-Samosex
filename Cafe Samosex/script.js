var menuElement1 = document.getElementById('menuElement1');
var menuElement2 = document.getElementById('menuElement2');
var menuElement3 = document.getElementById('menuElement3');

const menuOptions = {}

const menuAppear1 = new IntersectionObserver
    (function (enteries, menuAppear1) {
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                console.log(entry.target)
                entry.target.classList.add('menuAppear1')
            }
        })
    }, menuOptions)

const menuAppear2 = new IntersectionObserver
    (function (enteries, menuAppear2) {
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                console.log(entry.target)
                entry.target.classList.add('menuAppear2')
                //menuAppear2.unobserve(entry.target)
            }
        })
    }, menuOptions)

const menuAppear3 = new IntersectionObserver
    (function (enteries, menuAppear3) {
        enteries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                console.log(entry.target)
                entry.target.classList.add('menuAppear3')
            }
        })
    }, menuOptions)


menuAppear1.observe(menuElement1);
menuAppear2.observe(menuElement2);
menuAppear3.observe(menuElement3);
