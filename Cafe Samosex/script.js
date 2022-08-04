$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow")
})


const menuElement1 = document.querySelector('#menuElement1');
const menuElement2 = document.querySelector('#menuElement2');
const menuElement3 = document.querySelector('#menuElement3');

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
                // menuAppear1.unobserve(entry.target)
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
                // menuAppear3.unobserve(entry.target)
            }
        })
    }, menuOptions)

menuAppear1.observe(menuElement1)
menuAppear2.observe(menuElement2)
menuAppear3.observe(menuElement3)



let userName = document.getElementById('formInputName').value
let userEmail = document.getElementById('formInputEmail').value    
let userNoPpl = document.getElementById('formInputNoPpl').value    
let userDate = document.getElementById('formInputDate').value
let userTime = document.getElementById('formInputTime').value
let userRequests = document.getElementById('formInputRequests').value     

var formBtn = document.getElementById('formBtn')

formBtn.addEventListener("click", function (e) {
    e.preventDefault()
    Email.send({
        Host: "smtp.gmail.com",
        Username: "official.rkky@gmail.com",
        Password: "ihujvyebokqtojqt",
        To: "official.rkky@gmail.com",
        From: userEmail,
        Subject: "Reservation @ Cafe Samosex",
        Body: `Hello $(userName)! Thank you for booking a reservation at Cafe Samosex.
                your reservation is on $(userDate) at $(userTime) for $(userNoPpl). 
                Special Requests: $(userRequests)`
    }).then(
        message => alert('message')
    );
})

function validateForm(){
    if(userName = ""){
        alert("")
    }
}